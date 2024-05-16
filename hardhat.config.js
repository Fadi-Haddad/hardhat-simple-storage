require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-verify");


const Sepolia_RPC_URL = process.env.RPC_URL

const Sepolia_PRIVATE_KEY=process.env.PRIVATE_KEY

const ETHRSCAN_API_KEY = process.env.ETHRSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    sepolia:{
      url: Sepolia_RPC_URL,
      accounts:[Sepolia_PRIVATE_KEY],
      chainId:11155111,
    },
  },
  solidity: "0.8.7",
  etherscan:{
    // apikey :ETHRSCAN_API_KEY, // obtained from etherscan.io to enable programmatic contract verification
    apiKey :{
      sepolia: ETHRSCAN_API_KEY
    }
  }
}

