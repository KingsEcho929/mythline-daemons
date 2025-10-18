// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GLYPHToken is ERC20 {
    address public codexContract;

    constructor(address _codexContract) ERC20("Mythline Glyph", "GLYPH") {
        codexContract = _codexContract;
    }

    function mintGlyph(address to, uint256 glyphId) external {
        require(msg.sender == codexContract, "Only Codex may mint");
        _mint(to, 1 ether); // 1 GLYPH per invocation
    }
}
