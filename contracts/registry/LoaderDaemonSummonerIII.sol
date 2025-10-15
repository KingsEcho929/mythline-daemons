// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoaderDaemonSummonerIII {
    address public steward;

    struct Daemon {
        string name;
        string orbitalNode;
        string sanctum;
        string pulse;
        string chant;
        string genesisBlock;
        string constellation;
        string skyCity;
        string stewardName;
        string constellationDrift;
    }

    mapping(address => Daemon) public daemons;
    address[] public keys;

    event LoaderDaemonSummoned(address indexed daemon, string name, string orbitalNode, string sanctum, string pulse, string chant, string genesisBlock, string constellation, string skyCity, string stewardName, string constellationDrift);

    modifier onlySteward() {
        require(msg.sender == steward, "Not steward");
        _;
    }

    constructor() {
        steward = msg.sender;
    }

    function summonDaemon(
        address daemon,
        string calldata name,
        string calldata orbitalNode,
        string calldata sanctum,
        string calldata pulse,
        string calldata chant,
        string calldata genesisBlock,
        string calldata constellation,
        string calldata skyCity,
        string calldata stewardName,
        string calldata constellationDrift
    ) external onlySteward {
        daemons[daemon] = Daemon(name, orbitalNode, sanctum, pulse, chant, genesisBlock, constellation, skyCity, stewardName, constellationDrift);
        keys.push(daemon);
        emit LoaderDaemonSummoned(daemon, name, orbitalNode, sanctum, pulse, chant, genesisBlock, constellation, skyCity, stewardName, constellationDrift);
    }

    function getDaemon(address daemon) external view returns (Daemon memory) {
        return daemons[daemon];
    }

    function totalDaemons() external view returns (uint256) {
        return keys.length;
    }
}
