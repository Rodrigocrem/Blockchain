# Certificados ONG - Blockchain con ERC-1155

Este proyecto tiene como objetivo la creación y despliegue de un sistema basado en **blockchain** para la emisión de certificados en formato **token ERC-1155** para una ONG. Los voluntarios reciben certificados por su participación en actividades de la ONG a través de **tokens no fungibles (NFTs)**.

---

## 📖 Descripción

Este proyecto busca implementar una solución para gestionar la emisión de certificados en formato token, utilizando la tecnología de **blockchain**. Los certificados representan la participación de los voluntarios en actividades de la ONG, y cada certificado es un token ERC-1155. La solución incluye:
- Un contrato inteligente en la red **Sepolia**.
- Una interfaz web interactiva que permite la conexión con **MetaMask** para interactuar con la blockchain y emitir certificados.

---

## 🚀 Características

- **Emisión de certificados:** Los administradores de la ONG pueden emitir certificados (tokens ERC-1155) a los voluntarios.
- **Visualización de saldo:** Los usuarios pueden consultar su saldo de **Sepolia (ETH)** y los tokens que han recibido.
- **Interacción con MetaMask:** Los usuarios pueden conectarse a la **testnet Sepolia** a través de **MetaMask**.
- **Despliegue público:** El sistema está disponible públicamente en **GitHub Pages**.

---

## 🛠️ Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías:

### Frontend:
- **HTML5:** Para la estructura de la web.
- **CSS3:** Para el diseño y presentación.
- **JavaScript:** Para la lógica y la interacción con la blockchain mediante **ethers.js**.

### Blockchain:
- **Ethereum (Sepolia)**: Red de blockchain utilizada para el contrato inteligente.
- **Solidity:** Lenguaje de programación utilizado para desarrollar el contrato inteligente ERC-1155.
- **MetaMask**: Billetera de Ethereum para interactuar con el contrato desplegado en Sepolia.

### Despliegue:
- **GitHub Pages**: Para el despliegue de la aplicación web.

---

## 📂 Estructura del proyecto
Certificados-ONG/

├── contracts/ # Contratos inteligentes (Solidity)

│ └── Token.sol # Contrato ERC-1155

├── index.html # Página principal de la WebApp

├── script.js # Lógica JavaScript para interactuar con el contrato

├── style.css # Estilos CSS

├── README.md # Documentación del proyecto

└── .gitignore # Archivos y directorios a ignorar por git

---

### Explicación:
- **contracts/**: Contiene el contrato inteligente desarrollado en **Solidity**.
  - **Token.sol**: El contrato inteligente que gestiona la emisión de certificados en forma de tokens ERC-1155.
- **index.html**: La página principal de la WebApp.
- **script.js**: Código JavaScript que interactúa con el contrato inteligente en la blockchain.
- **style.css**: Los estilos CSS de la interfaz de la web.
- **README.md**: Este archivo de documentación.
- **.gitignore**: Archivos y directorios que deben ser ignorados por Git.

---

## 📋 Requisitos previos

Para ejecutar este proyecto, necesitarás tener instalado:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**
- **Remix** o **Hardhat** (para compilar y desplegar contratos inteligentes)
- **MetaMask** para interactuar con la red de Sepolia

---

## 🚀 Instalación y ejecución

Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/rodrigocrem/Blockchain.git
   cd Blockchain
2. **Instala las dependencias:**
   npm install.
3. **Desplegar el contrato en sepolia:**
   Usa Remix o cualquier herramienta de desarrollo de Ethereum para desplegar el contrato en Sepolia.
4. **Des`legar la Web en GitHub Pages:**
   Sube el contenido del directorio public/ a GitHub y configura GitHub Pages para servir la web desde la rama main.
---

## 📝 Licencia:

Este proyecto está bajo la Licencia MIT.
