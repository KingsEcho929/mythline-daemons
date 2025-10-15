// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StarlineGenesis {
    string public genesisMessage;
    address public inscriber;

    event GenesisInscribed(address indexed inscriber, string message);

    function inscribe(string memory message) public {
        genesisMessage = message;
        inscriber = msg.sender;
        emit GenesisInscribed(msg.sender, message);
    }
}
