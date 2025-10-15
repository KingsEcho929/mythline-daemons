import { ethers } from "ethers";
import { companions } from "../companions";
import OculvisABI from "../abis/Oculvis.json";

const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const oculvis = new ethers.Contract(companions.Oculvis, OculvisABI, provider);

export async function mountVision() {
  return await oculvis.mountVision();
}

export async function relayFocus(index: number) {
  return await oculvis.relayFocus(index);
}
