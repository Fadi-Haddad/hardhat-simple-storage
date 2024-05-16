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
3. eploy contract to Sepolia testnet
    ```sh
    yarn hardhat run .\scripts\deploy.js
    ```
4. deploy contract to Sepolia testnet with error tracing
    ```sh
    yarn hardhat run .\scripts\deploy.js --show-stack-traces
    ```
5. install etherscan package
    ```sh
    yarn add --dev @nomiclabs/hardhat-etherscan
