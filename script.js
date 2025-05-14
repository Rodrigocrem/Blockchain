mintForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const to = document.getElementById('recipient').value;
  const id = parseInt(document.getElementById('tokenId').value);
  let cantidad = parseInt(document.getElementById('amount').value);  // Sin decimales

  if (!contract) {
    showStatus("❌ Conecta MetaMask primero.");
    return;
  }

  // Validar dirección
  if (!ethers.utils.isAddress(to)) {
    showStatus("❌ Dirección de destinatario no válida.");
    return;
  }

  // Validar cantidad
  if (cantidad <= 0) {
    showStatus("❌ La cantidad debe ser mayor que 0.");
    return;
  }

  try {
    showStatus("⏳ Transacción enviada...");
    const tx = await contract.entregarCertificado(to, id, cantidad);
    await tx.wait();
    showStatus(`✅ Certificado emitido correctamente (Tx: ${tx.hash})`, 'success');
    await getTokenBalance();
  } catch (err) {
    console.error(err);
    showStatus("❌ Error al mintear. Revisa la consola.", 'error');
  }
});

// Función para mostrar el estado (mensaje de éxito o error)
const showStatus = (message, type = 'error') => {
  const statusElement = document.getElementById('status');
  statusElement.textContent = message;
  statusElement.className = type;
};
