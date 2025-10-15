import { ethers } from "ethers";
import { companions } from "../companions";
import BootbarkABI from "../abis/Bootbark.json";

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const bootbark = new ethers.Contract(companions.Bootbark, BootbarkABI, provider);

export async function getWisdom() {
  return await bootbark.getWisdom();
}

export async function howl() {
  return await bootbark.howl();
}
