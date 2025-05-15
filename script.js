const connectButton = document.getElementById('connectButton');
const userAddressDisplay = document.getElementById('userAddress');
const mintForm = document.getElementById('mintForm');
const status = document.getElementById('status');
const balanceList = document.getElementById('balanceList');
const sepoliaBalanceDisplay = document.getElementById('sepoliaBalance');

let signer;
let contract;

const contractAddress = "0x27fb403eec7b81a8176d8401fd836f9c76c94661"; // Cambia por tu dirección desplegada

const contractABI = [
  "function entregarCertificado(address to, uint256 id, uint256 cantidad) public",
  "function balanceOf(address account, uint256 id) public view returns (uint256)",
  "function getTokenName(uint256 id) public view returns (string memory)"
];

const tokenNames = {
  0: "Café Solidario:",
  1: "Residencia de Ancianos:",
  2: "Donación de Ropa y Alimentos:",
  3: "Comedor Social:",
  4: "Apoyo Escolar",
  5: "Recogida de Alimentos"
};

connectButton.addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
      userAddressDisplay.textContent = `Conectado: ${accounts[0]}`;

      await getSepoliaBalance();
      await getTokenBalance();
    } catch (err) {
      console.error(err);
      userAddressDisplay.textContent = '❌ Error al conectar con MetaMask';
    }
  } else {
    alert("Instala MetaMask para usar esta app.");
  }
});

const getSepoliaBalance = async () => {
  if (signer) {
    const balance = await signer.getBalance();
    const balanceInEth = ethers.utils.formatEther(balance);
    sepoliaBalanceDisplay.textContent = `Balance Sepolia: ${balanceInEth} ETH`;
  } else {
    sepoliaBalanceDisplay.textContent = 'Conecta MetaMask primero.';
  }
};

mintForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const to = document.getElementById('recipient').value;
  const id = parseInt(document.getElementById('tokenId').value);
  let cantidad = parseInt(document.getElementById('amount').value);

  if (!contract) {
    showStatus("❌ Conecta MetaMask primero.");
    return;
  }

  if (!ethers.utils.isAddress(to)) {
    showStatus("❌ Dirección de destinatario no válida.");
    return;
  }

  if (cantidad <= 0) {
    showStatus("❌ La cantidad debe ser mayor que 0.");
    return;
  }

  try {
    showStatus("⏳ Transacción enviada...");
    // Enviamos cantidad como entero sin decimales
    const tx = await contract.entregarCertificado(to, id, cantidad);
    await tx.wait();
    showStatus(`✅ Certificado emitido correctamente (Tx: ${tx.hash})`, 'success');
    await getTokenBalance();
  } catch (err) {
    console.error(err);
    showStatus("❌ Error al mintear. Revisa la consola.", 'error');
  }
});

const getTokenBalance = async () => {
  if (contract) {
    try {
      const address = await signer.getAddress();
      const ids = Object.keys(tokenNames).map(Number);
      balanceList.innerHTML = ''; // Limpiamos antes

      for (const id of ids) {
        const balance = await contract.balanceOf(address, id);
        const li = document.createElement('li');
        li.textContent = `Tienes ${balance.toString()} tokens de ${tokenNames[id]} (ID: ${id})`;
        balanceList.appendChild(li);
      }
    } catch (error) {
      console.error('Error al obtener el balance:', error);
      balanceList.innerHTML = '<li>Error al obtener el balance.</li>';
    }
  } else {
    balanceList.innerHTML = '<li>Conecta MetaMask primero.</li>';
  }
};

const showStatus = (message, type = 'error') => {
  status.textContent = message;
  status.className = type;
};
