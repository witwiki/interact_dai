const web3 = new Web3('http://localhost:9545');
// get list of addresses
const acounts = await web3.eth.getAccounts();
// get Web3 contract instance
const dai = new web3.eth.Contract(abi, address);
await dai.methods.transfer(recipient, amount, {from: fromAddress});
