// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Lottery 
/// @author Gabrielle 
/// @notice Allows users to enter a lottery, owner of the contract calls a winner
contract Lottery is Ownable{
    address[] public players;
    
    constructor() {}
    
    function enter() public payable{
        require(msg.value > .01 ether == true,"Minimum transaction value is 0.01 Ether");
        players.push(msg.sender);
    }
    
    function random() private view returns (uint){
        return uint(keccak256(abi.encodePacked(block.difficulty,block.timestamp,players)));
    }
    
    function pickWinner() public onlyOwner{
        uint index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }
    
    function getPlayers() public view returns(address[] memory){
        return players;
    }
}
