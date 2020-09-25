const DaiToken = artifacts.require("DaiToken");
const CallDaiToken = artifacts.require("CallDaiToken");

module.exports = async function(deployer, _network, accounts) {
  await deployer.deploy(DaiToken);
  const dai = await DaiToken.deployed();
  await deployer.deploy(CallDaiToken, dai.address);
  const oCallDaiToken = await CallDaiToken.deployed();
  await dai.faucet(oCallDaiToken.address, 100);
  await oCallDaiToken.moveDaiToken(accounts[1], 100);

  const balanceOne = await dai.balanceOf(oCallDaiToken.address);
  const balanceTwo = await dai.balanceOf(accounts[1]);

  console.log(balanceOne.toString());
  console.log(balanceTwo.toString());
};
