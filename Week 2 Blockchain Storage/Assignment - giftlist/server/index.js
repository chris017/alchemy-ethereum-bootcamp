const express = require('express');
const verifyProof = require('../utils/verifyProof');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_TREE = new MerkleTree(niceList);
const MERKLE_ROOT = MERKLE_TREE.getRoot();

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
   const body = req.body.name;
  // TODO: prove that a name is in the list 

  //const name = 'Norman Block';
  const index = niceList.findIndex(n => n === body);
  const proof = MERKLE_TREE.getProof(index);
  
  // verify proof against the Merkle Root

  if((verifyProof(proof, body, MERKLE_ROOT)) === true) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :( ");
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});