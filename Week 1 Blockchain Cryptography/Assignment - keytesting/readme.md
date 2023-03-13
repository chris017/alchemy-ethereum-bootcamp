## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.
In our case its an ETH adress so sliced with -20 and keccak256 encryption.

<img width="1338" alt="Bildschirm­foto 2023-03-02 um 09 34 22" src="https://user-images.githubusercontent.com/28670581/222374721-d5e649db-7412-4a6d-882e-cda966adfacb.png">


### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `node index` to start the server

The application should connect to the default server port (3042) automatically!

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

### Test Addresses

You can generate your own private/public keys by running `node scripts/generate.js`
Here are some already generatet ones:

1. `privateKey:  c7654c9e417ea1acdfd6242dc631de58fbbbec904966e5215ed3ef2512fc052b`
   `publicKey (Ethereum format):  4f9eb36b1b2f3dc7ee3b8a5a0f5aa06bd5168940`
2. `privateKey:  3e4c4e43c0ffb969e17c22c7bef4fee375c9aa44b8d090d31b68f890291f5698`
   `publicKey (Ethereum format):  2742eea4905e7d2276f7790b386d59d629125d0d`
3. `privateKey:  284186483a62ff4765fecef6fc926af97bc0722b5e4d8b7add2aec26e2ae6d21`
   `publicKey (Ethereum format):  a3ca8cf814227b3319f3dcb200630dc6d26f78f3`
