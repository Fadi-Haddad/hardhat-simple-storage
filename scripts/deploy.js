const { ethers, run } = require("hardhat");
require("dotenv").config();

async function main() {
    const simpleStoragefactory = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await simpleStoragefactory.deploy(); // this code deploys contracts to Hardhat's default network and settings
    // await simpleStorage.deployed();     //deprecated in hardhat v6
    console.log(simpleStorage.target);
  }
  async function verify(contractAddress, args){ // verify the contract on etherscan.io using their API service, 
    console.log("verifying contract on etherscan...");
    await run("verify:verify",{
      address: contractAddress,
      arguments: args,
    });

  }
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
