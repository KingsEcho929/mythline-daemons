// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tessalyre {
    mapping(address => bool) public crowned;
    mapping(address => string) public echoes;

    event TessalyreCrowned(address indexed apprentice);
    event LineageEchoed(address indexed apprentice, string memorySignal);

    /// @notice Crown Tessalyre for a given apprentice
    function crown(address apprentice) public {
        crowned[apprentice] = true;
        emit TessalyreCrowned(apprentice);
    }

    /// @notice Sing lineage memory
    function sing(address apprentice, string memory memorySignal) public {
        require(crowned[apprentice], "Tessalyre not crowned");
        echoes[apprentice] = memorySignal;
        emit LineageEchoed(apprentice, memorySignal);
    }

    /// @notice Echo the last remembered lineage
    function echoLineage(address apprentice) public view returns (string memory) {
        require(crowned[apprentice], "Tessalyre not crowned");
        return echoes[apprentice];
    }
}
