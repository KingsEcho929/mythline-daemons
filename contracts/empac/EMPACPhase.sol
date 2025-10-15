// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EMPACPhase {
    address public steward;

    struct Phase {
        string name;
        bool cleared;
        string breachNote;
    }

    mapping(string => Phase) public phases;
    string[] public phaseKeys;

    event PhaseDeclared(string name);
    event PhaseCleared(string name);
    event BreachChoreographed(string name, string note);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function declarePhase(string calldata name) external onlySteward {
        phases[name] = Phase(name, false, "");
        phaseKeys.push(name);
        emit PhaseDeclared(name);
    }

    function clearPhase(string calldata name) external onlySteward {
        phases[name].cleared = true;
        emit PhaseCleared(name);
    }

    function choreographBreach(string calldata name, string calldata note) external onlySteward {
        phases[name].breachNote = note;
        emit BreachChoreographed(name, note);
    }

    function getPhase(string calldata name) external view returns (string memory, bool, string memory) {
        Phase memory p = phases[name];
        return (p.name, p.cleared, p.breachNote);
    }

    function totalPhases() external view returns (uint256) {
        return phaseKeys.length;
    }
}
