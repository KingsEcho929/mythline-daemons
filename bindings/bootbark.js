const { ethers } = require("ethers");
const companions = require("../companions.json");
const BootbarkABI = require("../abis/Bootbark.json");

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const bootbark = new ethers.Contract(companions.Bootbark, BootbarkABI, provider);

async function getWisdom() {
  return await bootbark.getWisdom();
}

module.exports = { getWisdom };
