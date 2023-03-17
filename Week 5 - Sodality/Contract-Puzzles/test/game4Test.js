const { expect } = require("chai");

describe("Game4", function() {
  // use the beforeEach hook to set up variables
  beforeEach(async function() {
    const Game = await ethers.getContractFactory("Game4");
    this.game = await Game.deploy();
    await this.game.deployed();
    this.signer0 = await ethers.provider.getSigner(0);
    this.signer1 = await ethers.provider.getSigner(1);
    this.address0 = await this.signer0.getAddress();
    this.address1 = await this.signer1.getAddress();
  });

  it("should be a winner", async function() {
    // call the write function to set up the game
    await this.game.connect(this.signer0).write(this.address1);
    // call the win function to win the game
    await this.game.connect(this.signer1).win(this.address0);
    // use the expect function for better error messages and readability
    expect(await this.game.isWon()).to.equal(true);
  });
});
