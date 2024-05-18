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
        // expect(contractValue.toString()).to.equal(expectedValue) // another way of running equality test
    })
    it("should update when we call store",async function(){
        const valueToStore = 7;
        const contractResponse = await simpleStorage.store(valueToStore);
        await contractResponse.wait(1)
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), valueToStore)
        // expect(currentValue.toString()).to.equal(valueToStore.toString()) // another way of running equality test
    })
})