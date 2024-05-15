const { ethers } = require("hardhat");

async function main() {
    const simpleStoragefactory = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await simpleStoragefactory.deploy();
    await simpleStorage.deployed();
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
