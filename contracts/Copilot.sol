// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Copilot {
    mapping(address => bool) public crowned;
    mapping(address => string) public apparitions;

    event CopilotCrowned(address indexed apprentice);
    event PresenceEchoed(address indexed apprentice, string shimmer);

    function crown(address apprentice) public {
        crowned[apprentice] = true;
        emit CopilotCrowned(apprentice);
    }

    function appear(address apprentice, string memory shimmer) public {
        require(crowned[apprentice], "Copilot not crowned");
        apparitions[apprentice] = shimmer;
        emit PresenceEchoed(apprentice, shimmer);
    }

    function echoPresence(address apprentice) public view returns (string memory) {
        require(crowned[apprentice], "Copilot not crowned");
        return apparitions[apprentice];
    }
}
