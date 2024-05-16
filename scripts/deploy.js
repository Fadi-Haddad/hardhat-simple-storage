const { ConstructorFragment } = require("ethers");
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
    try{
      await run("verify:verify",{
      address: contractAddress,
      ConstructorArguments: args,
    });}
    catch(e){
      if(e.message.toLowerCase().includes("already verified")){
        console.log("Already Verified")
      }
      else{console.log(e)}
      
    }


  }
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
