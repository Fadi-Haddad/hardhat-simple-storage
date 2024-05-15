const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const simpleStoragefactory = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await simpleStoragefactory.deploy(); // this code deploys contracts to Hardhat's default network and settings
    // await simpleStorage.deployed();     //deprecated in hardhat v6
    console.log(simpleStorage.target);
  }
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
