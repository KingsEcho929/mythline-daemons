// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainManifestV2 {
    address public steward;

    struct Glyph {
        string name;
        address location;
        string kind;
        string pulse;
        string sanctum;
    }

    mapping(string => Glyph) public glyphs;
    string[] public keys;

    event GlyphLinked(string name, address location, string kind, string pulse, string sanctum);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function linkGlyph(string calldata name, address location, string calldata kind, string calldata pulse, string calldata sanctum) external onlySteward {
        glyphs[name] = Glyph(name, location, kind, pulse, sanctum);
        keys.push(name);
        emit GlyphLinked(name, location, kind, pulse, sanctum);
    }

    function getGlyph(string calldata name) external view returns (address, string memory, string memory, string memory) {
        Glyph memory g = glyphs[name];
        return (g.location, g.kind, g.pulse, g.sanctum);
    }

    function totalGlyphs() external view returns (uint256) {
        return keys.length;
    }
}
