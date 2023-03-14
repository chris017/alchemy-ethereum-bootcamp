const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

describe('Faucet', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractAndSetVariables() {
    const Faucet = await ethers.getContractFactory('Faucet');
    const faucet = await Faucet.deploy();

    const [owner, alice] = await ethers.getSigners();

    let withdrawAmount = ethers.utils.parseUnits('1', 'ether');

    return { faucet, owner, alice, withdrawAmount };
  }

  it('should deploy and set the owner correctly', async function () {
    const { faucet, owner } = await loadFixture(deployContractAndSetVariables);

    expect(await faucet.owner()).to.equal(owner.address);
  });

  it('should not allow withdrawals above .1 ETH at a time', async function () {
    const { faucet, withdrawAmount } = await loadFixture(
      deployContractAndSetVariables
    );
    await expect(faucet.withdraw(withdrawAmount)).to.be.reverted;
  });
  
  it('should destroy the faucet when the destroyFaucet function is called by the owner', async function () {
    const { faucet, owner } = await loadFixture(deployContractAndSetVariables);
    await faucet.destroyFaucet();
    expect(await ethers.provider.getCode(faucet.address)).to.equal('0x');
  });

  it('should only allow the owner to withdraw all funds', async function () {
    const { faucet, owner, alice } = await loadFixture(deployContractAndSetVariables);
    await expect(faucet.connect(alice).withdrawAll()).to.be.reverted;
    await expect(faucet.connect(owner).withdrawAll()).to.be.ok;
  });
});
