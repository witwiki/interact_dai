pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CallDaiToken {
    IERC20 dai;

    constructor(address daiAddress) public {
        dai = IERC20(daiAddress);
    }

    function moveDaiToken(address recipient, uint amount) external {
        dai.transfer(recipient, amount);
    }
}