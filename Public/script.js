// Conectar con Metamask
const connectButton = document.getElementById('connectButton');
const userAddressDisplay = document.getElementById('userAddress');
const mintForm = document.getElementById('mintForm');
const status = document.getElementById('status');
const balanceDisplay = document.getElementById('balance');
const sepoliaBalanceDisplay = document.getElementById('sepoliaBalance');  // Nuevo elemento para mostrar balance de Sepolia

let signer;
let contract;

// Dirección del contrato en Sepolia (sustituir por la dirección correcta)
const contractAddress = "0x27fb403eec7b81a8176d8401fd836f9c76c94661";

// ABI mínimo para interactuar con entregarCertificado
const contractABI = [
  "function entregarCertificado(address to, uint256 id, uint256 cantidad) public",
  "function balanceOf(address account, uint256 id) public view returns (uint256)",
  "function getTokenName(uint256 id) public view returns (string memory)"
];

// Función para conectar con Metamask
connectButton.addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
      userAddressDisplay.textContent = `Conectado: ${accounts[0]}`;

      // Obtener el balance de Sepolia (ETH)
      getSepoliaBalance();
      
      // Obtener el balance de los tokens
      getTokenBalance();
    } catch (err) {
      console.error(err);
      userAddressDisplay.textContent = '❌ Error al conectar con Metamask';
    }
  } else {
    alert("Instala Metamask para usar esta app.");
  }
});

// Obtener el balance de Sepolia (ETH)
const getSepoliaBalance = async () => {
  if (signer) {
    const balance = await signer.getBalance();
    const balanceInEth = ethers.utils.formatEther(balance);  // Convertir a ETH
    sepoliaBalanceDisplay.textContent = `Balance Sepolia: ${balanceInEth} ETH`;
  } else {
    sepoliaBalanceDisplay.textContent = 'Conecta Metamask primero.';
  }
};

// Mintear certificado
mintForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const to = document.getElementById('recipient').value;
  const id = parseInt(document.getElementById('tokenId').value);
  let cantidad = parseInt(document.getElementById('amount').value);  // Usamos enteros, sin decimales

  if (!contract) {
    status.textContent = "Conecta Metamask primero.";
    return;
  }

  try {
    status.className = "";
    status.textContent = "⏳ Transacción enviada...";
    const tx = await contract.entregarCertificado(to, id, cantidad);
    await tx.wait();
    status.className = "status-success";
    status.textContent = `✅ Certificado emitido correctamente (Tx: ${tx.hash})`;

    // Obtener el balance después de la transacción
    await getTokenBalance();
  } catch (err) {
    console.error(err);
    status.className = "status-error";
    status.textContent = "❌ Error al mintear. Revisa la consola.";
  }
});

// Función para obtener el balance de un token
const getTokenBalance = async () => {
  if (contract) {
    try {
      const address = await signer.getAddress();
      const ids = [0, 1, 2, 3];  // IDs de los tokens ("Taller educativo", "Jornada de limpieza", etc.)
      let balancesText = '';

      for (const id of ids) {
        const balance = await contract.balanceOf(address, id);
        const balanceInTokens = balance;  // Sin decimales
        const tokenName = await contract.getTokenName(id);
        balancesText += `Tienes ${balanceInTokens} tokens de ${tokenName} (ID: ${id})\n`;
      }

      balanceDisplay.textContent = balancesText;
    } catch (error) {
      console.error('Error al obtener el balance:', error);
      balanceDisplay.textContent = 'Error al obtener el balance.';
    }
  } else {
    balanceDisplay.textContent = 'Conecta Metamask primero.';
  }
};
