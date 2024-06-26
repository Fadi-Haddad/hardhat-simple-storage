require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("solidity-coverage");


const Sepolia_RPC_URL = process.env.RPC_URL

const Sepolia_PRIVATE_KEY=process.env.PRIVATE_KEY

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '1DRVTRDFHJ3Q5WZDJKT4NZN8RET1NFZFBK'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    sepolia:{
      url: Sepolia_RPC_URL,
      accounts:[Sepolia_PRIVATE_KEY],
      chainId:11155111,
    },
    localnode:{
      url:"http://127.0.0.1:8545/",
      chainId:31337,
    }
  },
  solidity: "0.8.7",
  gasReporter:{
    enabled: true
  },
  etherscan:{
    // apikey :ETHERSCAN_API_KEY, // obtained from etherscan.io to enable programmatic contract verification
    apiKey :{
      sepolia: ETHERSCAN_API_KEY
    }
  }
}

