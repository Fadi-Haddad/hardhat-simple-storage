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
9. start a console version of hardhat(alternative to scripts like deploy.js)
    ```sh
    yarn hardhat console --network localhost
    ```
    Now, we can run commands to deploy contract and interact with it:
    ```sh
    const simpleStoragefactory = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await simpleStoragefactory.deploy();
    await simpleStorage.retrieve();
    await simpleStorage.store(5);
    ```
8. delete artifacts folder and clear cache folder
    ```sh
    yarn hardhat clean
    ```
9. run all tests
    ```sh
    yarn hardhat test
    ```
10. run a specific test
    ```sh
    yarn hardhat test --grep <keyword in test description, like 'store'>
    ```
11. install hardhat-gas-reporter (using yarn add didn't work)
    ```sh
    npm install --save-dev "@types/mocha@>=9.1.0" "hardhat-gas-reporter@^1.0.8" "ts-node@>=8.0.0" "typescript@>=4.5.0"
    ```
12.run tests and generate a gas estimation
    ```sh
    yarn hardhat test
    ```
13. install solidity coverage package:
    ```sh
    yarn add solidity-coverage --dev
    ```
14. run coverage test:
    ```sh
    yarn hardhat coverage
    ```