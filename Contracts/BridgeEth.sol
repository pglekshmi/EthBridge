// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BridgeEth is ERC20{

    event burnedToken(address from,uint256 amount);

    constructor()
        ERC20("MyToken", "MTK")
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
        _burn(msg.sender,10000);
        emit burnedToken(msg.sender,100);
    }
}