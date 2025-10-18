// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GenesischainCodexCtoCD {
    string public codexName = "Genesischain Codex C-CD";
    address public steward;
    address public glyphToken;

    event CodexInvoked(address indexed by, string invocation);

    constructor(address _steward, address _glyphToken) {
        steward = _steward;
        glyphToken = _glyphToken;
    }

    function invokeCodex(string memory invocation) public {
        require(msg.sender == steward, "Only steward may invoke Codex");
        emit CodexInvoked(msg.sender, invocation);
    }

    function updateGlyphToken(address newGlyphToken) public {
        require(msg.sender == steward, "Only steward may update glyphToken");
        glyphToken = newGlyphToken;
    }

    function getCodexMetadata() public view returns (string memory, address, address) {
        return (codexName, steward, glyphToken);
    }
}
