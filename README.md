Certificados ONG - Blockchain con ERC-1155
Este proyecto tiene como objetivo la creación y despliegue de un sistema basado en blockchain para la emisión de certificados en formato token ERC-1155 para una ONG. Los voluntarios reciben certificados por su participación en actividades de la ONG a través de tokens no fungibles (NFTs).

Tecnologías utilizadas
Ethereum (Sepolia): La testnet de Ethereum utilizada para desplegar el contrato inteligente.
Solidity: Lenguaje de programación utilizado para desarrollar el contrato inteligente.
MetaMask: Billetera de Ethereum que permite a los usuarios interactuar con la blockchain.
Frontend: Desarrollado con HTML, CSS y JavaScript, utilizando ethers.js para la integración con el contrato inteligente.
GitHub Pages: Usado para desplegar la web de manera pública.
Características del Proyecto
Contrato inteligente ERC-1155: Emisión de certificados a los voluntarios como tokens ERC-1155. Cada token representa un tipo de participación (e.g., "Taller educativo", "Jornada de limpieza").
WebApp: Plataforma que permite a los usuarios conectarse con MetaMask, emitir certificados y consultar balances de tokens y Sepolia (ETH).
GitHub Pages: Despliegue público de la aplicación web.
Funcionalidades
Conectar con MetaMask: Los usuarios pueden conectarse a través de MetaMask para interactuar con la blockchain.
Emitir Certificados: Los administradores pueden emitir certificados (tokens) a las direcciones de los voluntarios.
Consultar Balance: Los usuarios pueden ver el balance de tokens de cada tipo de certificado.
Mostrar Balance de Sepolia: Los usuarios pueden consultar su saldo de Sepolia (ETH).
Despliegue del Proyecto
Contrato inteligente en Sepolia: Desplegado en la testnet Sepolia utilizando Remix y MetaMask.
WebApp en GitHub Pages: Desplegada usando GitHub Pages para facilitar el acceso público.
Cómo interactuar con la Web
Conecta tu MetaMask a la testnet Sepolia.
Dirígete a la web desplegada (en GitHub Pages).
Haz clic en "Conectar con MetaMask" para conectar tu billetera.
Selecciona el tipo de certificado que deseas recibir.
Introduce la dirección del destinatario y la cantidad de tokens que deseas emitir.
Visualiza el saldo de Sepolia (ETH) y los tokens recibidos.
Pruebas
Se realizaron diversas pruebas de emisión de certificados y consulta de balances. Los certificados se emiten correctamente y el saldo de tokens se actualiza adecuadamente después de cada transacción.

Ejemplo de transacción exitosa
image

Estructura del Proyecto
Code
/
├── contracts/        # Contratos inteligentes (Solidity)
│   └── Token.sol     # Contrato ERC-1155
├── index.html        # Página principal de la WebApp
├── script.js         # Lógica JavaScript para interactuar con el contrato
├── style.css         # Estilos CSS
├── README.md         # Documentación del proyecto
└── .gitignore        # Archivos y directorios a ignorar por git

Explicación:
contracts/: Contiene el contrato inteligente desarrollado en Solidity.
Token.sol: Contrato que gestiona la emisión de certificados como tokens ERC-1155.
index.html: Página principal de la WebApp.
script.js: Código JavaScript que interactúa con el contrato inteligente.
style.css: Estilos CSS de la interfaz web.
README.md: Documentación del proyecto.
.gitignore: Archivos y directorios que deben ser ignorados por Git.
Instrucciones para Desarrolladores
Clonar el repositorio:

bash
git clone https://github.com/rodrigocrem/Blockchain.git
cd Blockchain
Instalar dependencias (para trabajar con el contrato y frontend localmente):

bash
npm install
Desplegar el contrato en Sepolia:

Usa Remix o cualquier herramienta de desarrollo de Ethereum para desplegar el contrato en Sepolia.
Desplegar la Web en GitHub Pages:

Sube el contenido del directorio public/ a GitHub y configura GitHub Pages para servir la web desde la rama main.
Contribuciones
Las contribuciones al proyecto son bienvenidas. Si tienes alguna mejora o corrección que quieras proponer, siéntete libre de abrir un pull request.

Licencia
Este proyecto está bajo la Licencia MIT.

Derechos: @Rodrigocrem

