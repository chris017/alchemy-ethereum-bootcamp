// Importing necessary modules
const { assert } = require("chai");
const { utils } = require("ethers");

// Describing the Game5 function
describe("Game5", function() {

  // Testing if the game is a winner
  it("should declare a winner", async function() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    // Setting the threshold for the wallet address
    const threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;

    // Creating a random wallet and checking if its address is above the threshold
    let randomWallet = ethers.Wallet.createRandom();
    while(randomWallet.address >= threshold) {
      randomWallet = ethers.Wallet.createRandom();
    }

    // Getting the default signer and the winning signer
    const defaultSigner = await ethers.provider.getSigner(0);
    const winningSigner = await randomWallet.connect(ethers.provider);

    // Constructing the transaction object
    const tx = {
      to: winningSigner.address,
      value: utils.parseEther("1.0")
    }

    // Sending the transaction from the default signer to the winning signer
    await defaultSigner.sendTransaction(tx);

    // Calling the win function on the game contract from the winning signer
    await game.connect(winningSigner).win();

    // Asserting that the game has been won
    assert(await game.isWon(), "You did not win the game");
  });
});
