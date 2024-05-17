# hardhat-simple-storage

### Commands

1. get a list of functions inside hardhat
    ```sh
    yarn hardhat
    ```
2. compile the contract
    ```sh
    yarn hardhat compile
    ```
3. deploy contract to Hardhat testnet
    ```sh
    yarn hardhat run .\scripts\deploy.js 
    ```
4. deploy contract to Sepolia testnet
    ```sh
    yarn hardhat run .\scripts\deploy.js --network sepolia
    ```
5. deploy contract to Sepolia testnet with error tracing
    ```sh
    yarn hardhat run .\scripts\deploy.js --show-stack-traces
    ```
6. install hardhat-etherscan package
    ```sh
    yarn add --dev @nomiclabs/hardhat-etherscan
    ```
7. spin up a node on a local network similar to Ganache but in the terminal
    ```sh
    yarn hardhat node
    ```
8. deploy contract to "localnode" testnet
    ```sh
    yarn hardhat run .\scripts\deploy.js --network localnode
    ```