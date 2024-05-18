const { ethers } = require("hardhat");
const {assert, expect} = require("chai")

describe("SimpleStorage", function(){
    let simpleStorageFactory,simpleStorage  //global variables because we need them outside of out function
    beforeEach(async function(){
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorage = await simpleStorageFactory.deploy();
    })
    it("should start with a favorite number of 0",async function(){
        const contractValue = await simpleStorage.retrieve();
        const expectedValue = "0"
        assert.equal(contractValue.toString(), expectedValue);
    })
})