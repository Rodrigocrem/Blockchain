# Certificados ONG - Blockchain con ERC-1155

Este proyecto tiene como objetivo la creación y despliegue de un sistema basado en **blockchain** para la emisión de certificados en formato **token ERC-1155** para una ONG. Los voluntarios reciben certificados por su participación en actividades de la ONG a través de tokens no fungibles (NFTs).

## Tecnologías utilizadas

- **Ethereum (Sepolia)**: La testnet de Ethereum utilizada para desplegar el contrato inteligente.
- **Solidity**: Lenguaje de programación utilizado para desarrollar el contrato inteligente.
- **MetaMask**: Billetera de Ethereum que permite a los usuarios interactuar con la blockchain.
- **Frontend**: Desarrollado con **HTML**, **CSS** y **JavaScript**, utilizando **ethers.js** para la integración con el contrato inteligente.
- **GitHub Pages**: Usado para desplegar la web de manera pública.

## Características del Proyecto

- **Contrato inteligente ERC-1155**: El contrato permite la emisión de certificados a los voluntarios de la ONG como tokens ERC-1155. Cada token representa un tipo de participación, como "Taller educativo", "Jornada de limpieza", etc.
- **WebApp**: La web permite a los usuarios conectarse con **MetaMask**, emitir certificados y ver su balance de tokens y Sepolia (ETH).
- **GitHub Pages**: La aplicación web está desplegada en GitHub Pages para facilitar su acceso.

## Funcionalidades

1. **Conectar con MetaMask**: Los usuarios pueden conectarse a través de MetaMask para interactuar con la blockchain.
2. **Emitir Certificados**: Los administradores pueden emitir certificados (tokens) a las direcciones de los voluntarios.
3. **Consultar Balance**: Los usuarios pueden ver el balance de tokens de cada tipo de certificado que han recibido.
4. **Mostrar Balance de Sepolia**: Los usuarios también pueden ver su saldo de Sepolia (ETH).

## Despliegue del Proyecto

1. **Contrato inteligente en Sepolia**: El contrato fue desplegado en la testnet Sepolia utilizando **Remix** y **MetaMask**.
2. **WebApp en GitHub Pages**: La web fue desplegada usando **GitHub Pages** para facilitar su acceso público.

### Cómo interactuar con la Web

1. Conecta tu **MetaMask** a la testnet **Sepolia**.
2. Dirígete a la web desplegada (en GitHub Pages).
3. Haz clic en **"Conectar con MetaMask"** para conectar tu billetera.
4. Selecciona el tipo de certificado que deseas recibir.
5. Introduce la dirección del destinatario y la cantidad de tokens que deseas emitir.
6. Visualiza el saldo de **Sepolia (ETH)** y los tokens recibidos.

## Pruebas

Se realizaron diversas pruebas de emisión de certificados y consulta de balances. Los certificados se emiten correctamente y el saldo de tokens se actualiza adecuadamente después de cada transacción.

### Ejemplo de transacción exitosa

![image](https://github.com/user-attachments/assets/683d5567-55a5-4e13-ac3d-d3d66e3a1397)


## Estructura del Proyecto
/

├── contracts/ # Contratos inteligentes (Solidity)

│ └── Token.sol # Contrato ERC-1155

├── index.html # Página principal de la WebApp

├── script.js # Lógica JavaScript para interactuar con el contrato

├── style.css # Estilos CSS

├── README.md # Documentación del proyecto

└── .gitignore # Archivos y directorios a ignorar por git

### **Explicación**:
- **contracts/**: Contiene el contrato inteligente desarrollado en **Solidity**.
  - **Token.sol**: Es el contrato inteligente que gestiona la emisión de certificados en forma de tokens ERC-1155.
- **index.html**: La página principal de la WebApp.
- **script.js**: Código JavaScript que interactúa con el contrato inteligente en la blockchain.
- **style.css**: Los estilos CSS de la interfaz de la web.
- **README.md**: Documentación de todo el proyecto.
- **.gitignore**: Archivos y directorios que deben ser ignorados por Git.



## Instrucciones para Desarrolladores

1. **Clonar el repositorio**:
  git clone https://github.com/rodrigocrem/Blockchain.git

  cd Blockchain
3. **Instalar dependencias** (para trabajar con el contrato y frontend localmente):
  npm install

4. **Desplegar el contrato en Sepolia**:
- Usa **Remix** o cualquier herramienta de desarrollo de Ethereum para desplegar el contrato en **Sepolia**.

4. **Desplegar la Web en GitHub Pages**:
- Sube el contenido del directorio `public/` a GitHub y configura **GitHub Pages** para servir la web desde la rama `main`.

## Contribuciones

Las contribuciones al proyecto son bienvenidas. Si tienes alguna mejora o corrección que quieras proponer, siéntete libre de abrir un **pull request**.

---

**Licencia**: Este proyecto está bajo la **Licencia MIT**.
**Derechos**: @Rodrigocrem






