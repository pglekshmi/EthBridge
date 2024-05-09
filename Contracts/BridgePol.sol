// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BridgePol is ERC20{

    // event burnedToken(address from,uint256 amount);

    constructor()
        ERC20("WrappedMyToken", "WMTK")
    {
        _mint(msg.sender,100000);
    }

    function decimals() public pure override returns (uint8) {
        return 2;
    }

    function mint(address to, uint256 amount) public  {
        _mint(to, amount);
    }
    function swapeth()public{
        _mint(msg.sender,10000);
        
    }
}