pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DaiToken is ERC20 {
    constructor() public ERC20('Dai Stablecoin', 'DAI') {}

    // create a dai faucet function
    function faucet(address recipient, uint amount) external {
        _mint(recipient, amount);
    }
} 