const MyContract = artifacts.require("MyContract");

contract("MyContract", accounts => {
  it("should set the name correctly", async () => {
    const instance = await MyContract.deployed();
    await instance.setName("New Name");
    const name = await instance.name();
    assert.equal(name, "New Name", "The name was not set correctly");
  });
});
