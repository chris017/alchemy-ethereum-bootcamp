# Smart Contract Unit Testing 🧪

This repository contains a Solidity smart contract that represents a Faucet. The Faucet contract is designed to allow users to withdraw a small amount of ETH at a time. The contract can be tested using the following tests:

1. Deployment and Ownership: The first test checks whether the contract is deployed correctly and the owner is set to the correct address.
2. Withdrawal Limit: The second test ensures that the contract does not allow withdrawals above 0.1 ETH at a time. This test checks the functionality of the contract's withdrawal feature.
3. Faucet Destruction: The third test checks the faucet's ability to destroy the Faucet contract when the destroyFaucet function is called by the owner.
4. Owner Withdrawal: The fourth and final test checks whether the contract only allows the owner to withdraw all funds. This test checks the security of the contract and ensures that only the owner can access the funds.

## Getting Started 🚀

To run the tests for the Faucet contract, you will need to set up a local environment with the following:

1. Solidity Compiler: Solidity is a contract-oriented programming language for writing smart contracts. You will need a Solidity compiler to compile the smart contract.
2. Chai: Chai is a JavaScript assertion library that allows you to write expressive and readable tests.

Once you have installed these dependencies, you can run the tests using the following steps:

1. Clone the repository.
2. Change into the project directory: cd...
3. Install the dependencies: npm install.
4. Finally, run the tests: npx hardhat test.

## Conclusion 📚

The tests outlined above cover the essential functionalities of the Faucet smart contract, including deployment, withdrawal limits, destruction, and owner withdrawal. By running these tests, you can ensure that the contract behaves as expected and that there are no critical security vulnerabilities. Using Chai, you can write expressive and readable tests to verify the contract's functionality.

There are many more cases that you can test for to create really iron-clad and comprehensive unit tests - and thus create iron-clad smart contracts! 💪 The testing rabbit hole is particularly great for anyone looking to get a solid foundation in smart contract security, lots of testing there for sure! Good luck, smart contract tester! 🫡
