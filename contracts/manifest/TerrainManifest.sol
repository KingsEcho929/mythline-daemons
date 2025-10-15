// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TerrainManifest {
    address public steward;

    struct Glyph {
        string name;
        address location;
        string kind;
    }

    mapping(string => Glyph) public glyphs;
    string[] public keys;

    event GlyphLinked(string name, address location, string kind);
    event ManifestEchoed(string chant);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function linkGlyph(string calldata name, address location, string calldata kind) external onlySteward {
        glyphs[name] = Glyph(name, location, kind);
        keys.push(name);
        emit GlyphLinked(name, location, kind);
    }

    function getGlyph(string calldata name) external view returns (address, string memory) {
        Glyph memory g = glyphs[name];
        return (g.location, g.kind);
    }

    function echoManifest(string calldata chant) external onlySteward {
        emit ManifestEchoed(chant);
    }

    function totalGlyphs() external view returns (uint256) {
        return keys.length;
    }
}
