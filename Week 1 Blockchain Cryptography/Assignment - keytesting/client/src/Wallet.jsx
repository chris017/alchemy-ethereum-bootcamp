import server from "./server";
import * as secp from 'ethereum-cryptography/secp256k1';
import { keccak256 } from 'ethereum-cryptography/keccak';
import {toHex} from 'ethereum-cryptography/utils';
import ethLogo from './img/eth.png'

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const publicKey = secp.getPublicKey(privateKey);
    const hashedPublicKey = keccak256(publicKey.slice(1));
    const ethereumPublicKey = hashedPublicKey.slice(-20);
    const address = toHex(ethereumPublicKey);

    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <img  src={ethLogo} style={{width: 100, height: 150}} alt="ETH Logo"/>
      <h1>Your Wallet</h1>
      <label>
        Private Key
        <input placeholder="Enter your Private Key" value={privateKey} onChange={onChange}></input>
      </label>
      <div className="balance">ETH-Address: {address}</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
