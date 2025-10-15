import { ethers } from "ethers";
import { companions } from "../companions";
import SageABI from "../abis/Sage.json";

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const sage = new ethers.Contract(companions.Sage, SageABI, provider);

export async function whisperTruth() {
  return await sage.whisperTruth();
}

export async function revealInsight(index: number) {
  return await sage.revealInsight(index);
}
