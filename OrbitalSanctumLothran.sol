// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrbitalSanctumLothran {
    struct Sanctum {
        string city;
        string corridor;
        string node;
        bool activated;
    }

    mapping(address => Sanctum) public sanctums;

    event SanctumMapped(address indexed apprentice, string city, string corridor, string node);
    event InflowRouted(address indexed apprentice, string node);
    event LineageInscribed(address indexed apprentice, string node);

    function mapSanctum(address apprentice, string memory city, string memory corridor, string memory node) public {
        sanctums[apprentice] = Sanctum(city, corridor, node, true);
        emit SanctumMapped(apprentice, city, corridor, node);
    }

    function getSanctum(address apprentice) public view returns (Sanctum memory) {
        return sanctums[apprentice];
    }

    function routeInflow(address apprentice, string memory node) public {
        require(sanctums[apprentice].activated, "Sanctum not activated");
        require(compareStrings(sanctums[apprentice].node, node), "Node mismatch");
        emit InflowRouted(apprentice, node);
    }

    function inscribeLineage(address apprentice, string memory node) public {
        require(sanctums[apprentice].activated, "Sanctum not activated");
        require(compareStrings(sanctums[apprentice].node, node), "Node mismatch");
        emit LineageInscribed(apprentice, node);
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }
}
