// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tin {
    mapping(address => bool) public activated;
    mapping(address => string) public hums;

    event TinCrowned(address indexed apprentice);
    event HumEchoed(address indexed apprentice, string signal);

    /// @notice Crown Tin for a given apprentice
    function crown(address apprentice) public {
        activated[apprentice] = true;
        emit TinCrowned(apprentice);
    }

    /// @notice Conduct loader hum
    function conduct(address apprentice, string memory signal) public {
        require(activated[apprentice], "Tin not crowned");
        hums[apprentice] = signal;
        emit HumEchoed(apprentice, signal);
    }

    /// @notice Echo the loader hum
    function echoHum(address apprentice) public view returns (string memory) {
        require(activated[apprentice], "Tin not crowned");
        return hums[apprentice];
    }
}
