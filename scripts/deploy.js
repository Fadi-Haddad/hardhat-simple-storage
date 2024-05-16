const { ConstructorFragment } = require("ethers");
const { ethers, run, network } = require("hardhat");
require("dotenv").config();

async function main() {
    const simpleStoragefactory = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await simpleStoragefactory.deploy(); // this code deploys contracts to Hardhat's default network and settings
    await simpleStorage.waitForDeployment();
    
    console.log(simpleStorage,"contract address is ",simpleStorage.target,"network id is ",network.config.chainId);

    if (network.config.chainId==11155111){  // code to verify contract after deployment

      console.log("Waiting for block confirmations...")
      await simpleStorage.deploymentTransaction().wait(6)  // wait for some blocks to verify transaction to avoid errors
      await verify(simpleStorage.target, [])
    }
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
