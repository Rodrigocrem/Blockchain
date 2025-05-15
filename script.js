const connectButton = document.getElementById('connectButton');
const userAddressDisplay = document.getElementById('userAddress');
const mintForm = document.getElementById('mintForm');
const status = document.getElementById('status');
const balanceList = document.getElementById('balance');
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

const connectWallet = async () => {
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
      userAddressDisplay.textContent = 'Error al conectar con MetaMask';
    }
  } else {
    alert("Instala MetaMask para usar esta app.");
  }
};

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
    showStatus("Conecta MetaMask primero.");
    return;
  }

  if (!ethers.utils.isAddress(to)) {
    showStatus("Dirección de destinatario no válida.");
    return;
  }

  if (cantidad <= 0) {
    showStatus("La cantidad debe ser mayor que 0.");
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
    showStatus("Error al mintear. Comprueba que tienes el rango necesario para enviar.", 'error');
  }
});

const getTokenBalance = async () => {
  const balanceContainer = document.getElementById('balance');
  
  if (!contract) {
    balanceContainer.innerHTML = `
      <div class="connect-wallet">
        <h3>Conecta tu cartera digital</h3>
        <p>Para ver tus tokens solidarios necesitas conectar tu cartera MetaMask</p>
        <button onclick="connectWallet()">Conectar MetaMask</button>
      </div>
    `;
    return;
  }

  try {
    // Mostrar animación de carga
    balanceContainer.innerHTML = `
      <div class="loading-container">
        <div class="loading-spinner"></div>
      </div>
    `;
    
    const address = await signer.getAddress();
    const ids = Object.keys(tokenNames).map(Number);
    
    // Obtener todos los balances en paralelo
    const balancePromises = ids.map(id => contract.balanceOf(address, id));
    const balances = await Promise.all(balancePromises);
    
    // Crear las tarjetas HTML para cada token
    let cardsHTML = '';
    
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const tokenName = tokenNames[id];
      // Convertir de wei a ether y formatear con 2 decimales
      const formattedBalance = (Number(balances[i].toString()) / 1e18).toFixed(2);
      const hasTokens = parseFloat(formattedBalance) > 0;
      const description = document.getElementById(`desc-${id}`)?.textContent || 
                          'Contribuye a proyectos solidarios con este token.';
      
      cardsHTML += `
        <div class="token-card ${hasTokens ? 'active' : ''}">
          <span class="token-id">ID: ${id}</span>
          <div class="token-name primario-s">${tokenName}</div>
          <div class="token-balance">
            ${formattedBalance}
            <span class="unit">tokens</span>
          </div>
          <div class="token-description">${description}</div>
        </div>
      `;
    }
    
    balanceContainer.innerHTML = cardsHTML;
    
  } catch (error) {
    console.error('Error al obtener el balance:', error);
    balanceContainer.innerHTML = `
      <div class="connect-wallet">
        <h3>Error al cargar los tokens</h3>
        <p>Ha ocurrido un problema al cargar tus tokens solidarios. Intenta recargar la página.</p>
      </div>
    `;
  }
};

// Función para actualizar los balances automáticamente cada 30 segundos
const startAutoRefresh = () => {
  getTokenBalance(); // Cargar balances inmediatamente
  
  // Actualizar cada 30 segundos
  setInterval(() => {
    getTokenBalance();
  }, 30000);
};

// Iniciar la actualización automática cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  startAutoRefresh();
});


const showStatus = (message, type = 'error') => {
  status.textContent = message;
  status.className = type;
};
