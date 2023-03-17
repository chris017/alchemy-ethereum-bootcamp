# My Solution to Contract Puzzles

<img width="275" alt="Bildschirm­foto 2023-03-17 um 13 02 12" src="https://user-images.githubusercontent.com/28670581/225899145-906015d8-858f-4022-ab86-f6ea8e75ddb2.png">
Once you are able to run npx hardhat test and get all the tests passing green with ✅✅✅✅✅ check marks, you have successfully solved all the challenges! 🧠

## The goal of the Smart Contract puzzles 🏁

work on reading smart contracts and writing good tests to modify those smart contracts.

Each Game contract will have a storage variable called `isWon`:

```
bool public isWon;
```

The objective is to set this `isWon` to `true` without modifying the smart contract.

At the same time, you're more than welcome to use `console.log` from hardhat if you need to [debug your smart contracts](https://hardhat.org/tutorial/debugging-with-hardhat-network.html#solidity-console-log).

### Running the tests

First, install all the dependencies with `npm i`. Then, you can run all tests at once by running `npx hardhat test`. However, this might be frustrating when you are just trying to test an individual game.

If you are working on `Game1`, for instance, it will make more sense to run the test cases for the first game: `npx hardhat test test/game1Test.js`. Each Game contract will have a corresponding test file.

Your goal is to modify the tests to make the test case pass without modifying the smart contract (and leaving the `isWon` assertion in place).

## How i did it 🧪

```
1. Game1:
    // you must call unlock before you can win
    await game.unlock();

2. Game2:
    // press all the right switches to win this stage
    // Turn on switches with keys 20, 47, and 212
    await game.switchOn(20);
    await game.switchOn(47);
    await game.switchOn(212);
    await game.win();

3. Game3:
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

4. Game4:
    // use the beforeEach hook to set up variables
    beforeEach(async function() {
        const Game = await ethers.getContractFactory("Game4");
        this.game = await Game.deploy();
        await this.game.deployed();
        this.signer0 = await ethers.provider.getSigner(0);
        this.signer1 = await ethers.provider.getSigner(1);
        this.address0 = await this.signer0.getAddress();
        this.address1 = await this.signer1.getAddress();});

5. Game5:
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
```
