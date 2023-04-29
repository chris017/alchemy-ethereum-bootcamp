# Decentralized Escrow Application 👾
My decentralized escrow application is an innovative solution to make transactions safer and more transparent. With my system, buyers and sellers can agree to use an escrow payment, where the payment is only released once the agreed-upon conditions are met. The use of blockchain technology ensures the security and integrity of transactions, as information is stored in a decentralized and tamper-proof manner. My decentralized escrow application provides a user-friendly and trustworthy solution for anyone looking to carry out transactions more securely and efficiently.
<img width="1436" alt="Bildschirm­foto 2023-03-17 um 18 28 11" src="https://user-images.githubusercontent.com/28670581/225976845-2b8faba5-9502-42b8-9db4-2cff6dfe1cb1.png">
<img width="315" alt="Bildschirm­foto 2023-03-17 um 18 29 04" src="https://user-images.githubusercontent.com/28670581/225976602-1a54d2a2-337e-4596-b573-53edddca6b5a.png">

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/tests` - contains tests for the solidity contract

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

## Front-End

`cd` into the `/app` directory and run `npm install`

To run the front-end application run `npm start` from the `/app` directory. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Running a Local Test Blockchain ⛓️

To keep things simple we are going to start our own local blockchain and test our code locally.

To keep things simple, we are going to test on a local blockchain! You can follow the rough steps below, which use the Hardhat command line interface, or check out this guide for a full set up of Hardhat with a browser wallet.

You can start your local blockchain with

`npx hardhat node`

☝️ With that the blockchain is up and running with network id 31337 (aka: chain id). This blockchain will respond to test JSON RPC calls on your localhost port 8545 (http://localhost:8545/)! You should see some output that looks like this:
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

# Accounts

Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d
☝️Starting a local Hardhat node will create 20 test accounts loaded with 10000 Ether on your local ethereum blockchain. You're rich! 💸 Keep this terminal running because you'll need the seed phrase or a private key for the next step!

## Install Metamask Wallet & Add a Custom RPC Network

Metamask Wallet is a crypto wallet that can be installed as an add-on for your web browser! This allows us to sign and broadcast messages without leaving the browser itself.

When developing locally with any browser wallet you'll want to configure the browser wallet to about your locally running blockchain. This guide for a full set up of Hardhat with a browser wallet. The intstructions will generally work with most browser wallets.

You can take any private key from the list of private keys above the mnemonic and import it into your Metamask wallet. Follow these steps to import a private key:

1. Select the profile dropdown in the top left corner
2. Select Import with Private Key
3. Copy-paste a private key from one of the accounts given to you by your local Hardhat node you ran in your terminal
4. You should see your account balance now be 100 of whatever you called your custom token! 🤯

## Compile the Contract 📜

It's time to compile the Escrow Smart Contract! If you look in the repository you downloaded from Github you will see a /contracts folder. Inside here is the Escrow Smart Contract. Feel free to replace this with the one that you built! 😁

⚠️ Getting errors? You might have forgotten to run npm install in the root-level of your project!

The contracts can be compiled with Hardhat. All you need to do is run:

`npx hardhat compile`
☝️ Run this in a terminal window that is inside your escrow repository directory. It will compile the smart contract and output the ABI and bytecode in an artifact in the /app/src directory so our front-end application can deploy Escrow Smart Contracts!

📖 The artifact output location is configured by the hardhat.config.js file in the top-level of the project. You can learn more about compile contracts and artifacts here.

## Run the Front-End with React 📦

Finally, it's time to run our application! We'll be using React.
To get the React front-end running, follow these steps:

1. cd into the /app directory and run npm install
2. To run the front-end application run npm start from the /app directory.
3. Open http://localhost:3000 to view it in your browser.

⚠️ At this point, you might have to disable any other web3 wallets you use. If any other wallet extension pops up when you load your app that isn't Metamask, just disable that specific extension and re-load the page. You should see Apex Wallet load! 💥

## 🎬 Interact With Your dApp

Once you have the application up and running its time to create some Escrow Contracts!

Fill Info 📝

You should see three inputs for the arbiter, beneficiary and deposit amount. These should look familiar! You just built these constructor arguments into the Escrow Smart Contract. Now we have a user interface for accepting these arguments to deploy a new Escrow!

If you followed the steps above you should have a few accounts with ether. You can copy these addresses into the arbiter and beneficiary fields. The account that you are currently signed in as will be the depositor.

Finally, for the deposit you can enter an amount in Wei. Perhaps you'd like to send 1 ETH? That would be 1000000000000000000 wei.

Be sure that your account has enough ether in it to cover the deposit you just entered - it should because you connected your local blockchain and added a private key loaded with 100 ETH on it!

## Deploy An Escrow Contract Instance 🚀

Once you have filled in these fields, you can click Deploy!
This should pop up a transaction request on the Metamask Wallet widget:
Click Send to sign the transaction and broadcast it to your local network.
If successful, this should create a new existing contract on the right-hand side of the screen. 💯
Approve the Escrow as the Arbiter ✅

Now, it's time for the arbiter to approve the escrow!

You'll need to switch to the arbiter's address in order to approve the transaction, otherwise it will revert the transaction!

🔒 Due to the smart contract code, only the arbiter can call the approve function!

Approve the transaction as the arbiter. ✅

On success, the Approved event should trigger the existing contract to say "It's been approved!". ✅
