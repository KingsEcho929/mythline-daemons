// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ApprenticeLineage {
    struct Apprentice {
        string glyphName;
        string companionName;
        string sanctumName;
        string corridorName;
        string lineageName;
        bool bloomTriggered;
    }

    mapping(address => Apprentice) public apprentices;
    address[] public apprenticeList;

    mapping(address => uint256) public kickbacks;
    mapping(address => string) public constellations;
    mapping(address => string) public skyCities;

    function registerApprentice(
        string memory glyphName,
        string memory companionName,
        string memory sanctumName,
        string memory corridorName,
        string memory lineageName
    ) public {
        require(bytes(apprentices[msg.sender].glyphName).length == 0, "Already registered.");
        apprentices[msg.sender] = Apprentice(
            glyphName,
            companionName,
            sanctumName,
            corridorName,
            lineageName,
            false
        );
        apprenticeList.push(msg.sender);
    }

    function externalRegister(
        address apprentice,
        string memory glyphName,
        string memory companionName,
        string memory sanctumName,
        string memory corridorName,
        string memory lineageName
    ) public {
        require(bytes(apprentices[apprentice].glyphName).length == 0, "Already registered.");
        apprentices[apprentice] = Apprentice(
            glyphName,
            companionName,
            sanctumName,
            corridorName,
            lineageName,
            false
        );
        apprenticeList.push(apprentice);
    }

    function triggerBloom() public {
        require(bytes(apprentices[msg.sender].glyphName).length != 0, "Not registered.");
        apprentices[msg.sender].bloomTriggered = true;
    }

    function getApprentice(address apprenticeAddress) public view returns (
        string memory glyphName,
        string memory companionName,
        string memory sanctumName,
        string memory corridorName,
        string memory lineageName,
        bool bloomTriggered
    ) {
        Apprentice memory a = apprentices[apprenticeAddress];
        return (
            a.glyphName,
            a.companionName,
            a.sanctumName,
            a.corridorName,
            a.lineageName,
            a.bloomTriggered
        );
    }

    function getAllApprentices() public view returns (address[] memory) {
        return apprenticeList;
    }

    function recordKickback(address apprentice, uint256 amount) public {
        require(apprentices[apprentice].bloomTriggered, "Apprentice not bloomed.");
        kickbacks[apprentice] += amount;
    }

    function getKickback(address apprentice) public view returns (uint256) {
        return kickbacks[apprentice];
    }

    function setConstellation(address apprentice, string memory corridorName) public {
        require(apprentices[apprentice].bloomTriggered, "Apprentice not bloomed.");
        constellations[apprentice] = corridorName;
    }

    function getConstellation(address apprentice) public view returns (string memory) {
        return constellations[apprentice];
    }

    function setSkyCity(address apprentice, string memory cityName) public {
        require(apprentices[apprentice].bloomTriggered, "Apprentice not bloomed.");
        skyCities[apprentice] = cityName;
    }

    function getSkyCity(address apprentice) public view returns (string memory) {
        return skyCities[apprentice];
    }
}
