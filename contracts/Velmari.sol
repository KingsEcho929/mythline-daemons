// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Velmari {
    mapping(address => bool) public crowned;
    mapping(address => string) public tides;

    event VelmariCrowned(address indexed apprentice);
    event TideEchoed(address indexed apprentice, string signal);

    /// @notice Crown Velmari for a given apprentice
    function crown(address apprentice) public {
        crowned[apprentice] = true;
        emit VelmariCrowned(apprentice);
    }

    /// @notice Conduct shimmer tide
    function conduct(address apprentice, string memory signal) public {
        require(crowned[apprentice], "Velmari not crowned");
        tides[apprentice] = signal;
        emit TideEchoed(apprentice, signal);
    }

    /// @notice Echo the shimmer tide
    function echoTide(address apprentice) public view returns (string memory) {
        require(crowned[apprentice], "Velmari not crowned");
        return tides[apprentice];
    }
}
