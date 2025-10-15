// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeRegistry {
    struct Apprentice {
        string name;
        string lineage;
        bool crowned;
    }

    mapping(address => Apprentice) public apprentices;

    event ApprenticeCrowned(address indexed apprentice, string name, string lineage);

    function crown(string memory name, string memory lineage) public {
        apprentices[msg.sender] = Apprentice(name, lineage, true);
        emit ApprenticeCrowned(msg.sender, name, lineage);
    }

    function echo(address apprentice) public view returns (string memory) {
        require(apprentices[apprentice].crowned, "Not crowned");
        return string(abi.encodePacked(apprentices[apprentice].name, " of ", apprentices[apprentice].lineage));
    }
}
