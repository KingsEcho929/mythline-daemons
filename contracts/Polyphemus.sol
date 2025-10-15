// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Polyphemus {
    mapping(address => bool) public crowned;
    mapping(address => string) public anchorEcho;

    event Crowned(address indexed sentinel);
    event Anchored(address indexed sentinel, string echo);

    function crown(address sentinel) public {
        crowned[sentinel] = true;
        emit Crowned(sentinel);
    }

    function anchor(address sentinel, string memory echo) public {
        require(crowned[sentinel], "Not crowned");
        anchorEcho[sentinel] = echo;
        emit Anchored(sentinel, echo);
    }

    function echoSentinel(address sentinel) public view returns (string memory) {
        require(crowned[sentinel], "Not crowned");
        return anchorEcho[sentinel];
    }
}
