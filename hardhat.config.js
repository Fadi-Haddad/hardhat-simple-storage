require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const Sepolia_RPC_URL = process.env.RPC_URL

const Sepolia_PRIVATE_KEY=process.env.PRIVATE_KEY

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
};
