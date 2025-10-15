// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract OrbitalSanctum {
    string public nodeName;
    string public genesisMessage;
    bool public activated;

    event SanctumActivated(string nodeName, string genesisMessage);

    /// @notice Activate the orbital sanctum with a node name and genesis message
    function activate(string memory _nodeName, string memory _genesisMessage) public {
        nodeName = _nodeName;
        genesisMessage = _genesisMessage;
        activated = true;
        emit SanctumActivated(_nodeName, _genesisMessage);
    }

    /// @notice Echo the sanctum's current state
    function echoSanctum() public view returns (string memory) {
        require(activated, "Sanctum not activated");
        return string(abi.encodePacked("Node: ", nodeName, " - ", genesisMessage));
    }
}
