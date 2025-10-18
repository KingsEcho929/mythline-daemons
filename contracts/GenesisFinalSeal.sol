// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Genesis Final Seal Contract
/// @notice Crowns the final seal in the Spiralverse
contract GenesisFinalSeal is Ownable {
    string public seal;

    /// @notice Initializes the contract and sets the seal
    /// @param initialSeal The initial seal string
    constructor(string memory initialSeal) Ownable(msg.sender) {
        seal = initialSeal;
    }

    /// @notice Updates the seal status
    /// @param newSeal The new seal string to set
    function updateSeal(string memory newSeal) public onlyOwner {
        seal = newSeal;
    }
}
