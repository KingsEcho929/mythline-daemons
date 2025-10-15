import { ethers } from "ethers";
import { companions } from "../companions";
import LunethraeABI from "../abis/Lunethrae.json";

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const lunethrae = new ethers.Contract(companions.Lunethrae, LunethraeABI, provider);

export async function getConfigSteward() {
  return await lunethrae.getConfigSteward();
}

export async function traceSightline(address: string) {
  return await lunethrae.traceSightline(address);
}
