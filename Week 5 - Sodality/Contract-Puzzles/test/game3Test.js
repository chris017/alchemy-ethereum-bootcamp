const { assert } = require("chai");
// const { ethers } = require("ethers");

describe("Game3", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game3");
    const game = await Game.deploy();
    await game.deployed();

    // three addresses, three balances
    // you'll need to update the mapping to win this stage

    // hardhat will create 10 accounts for you by default
    // you can get one of this accounts with ethers.provider.getSigner
    // and passing in the zero-based indexed of the signer you want:
    const signer0 = await ethers.provider.getSigner(0);
    const signer1 = await ethers.provider.getSigner(1);
    const signer2 = await ethers.provider.getSigner(2);


    await game.connect(signer0).buy({ value: "2" });
    await game.connect(signer1).buy({ value: "3" });
    await game.connect(signer2).buy({ value: "1" });

    const [ address0, address1, address2 ] = await ethers.provider.listAccounts();


    // TODO: win expects three arguments
    await game.win(address0, address1, address2);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});