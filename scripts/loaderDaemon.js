import { ethers } from "ethers";
import glyphs from "../glyphs.json";
import GenesischainABI from "../abi/GenesischainCodexABI.json";

const contractAddress = process.env.GENESISCHAIN_CODEX_ADDRESS;
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, GenesischainABI, provider);

export function initializeCompanions() {
  const container = document.getElementById('companions');
  glyphs.forEach(g => {
    const el = document.createElement('div');
    el.className = 'companion';
    el.dataset.name = g.name;
    el.innerText = `${g.name} — ${g.role}`;
    container.appendChild(el);

    const audio = document.createElement('audio');
    audio.id = `${g.name}Audio`;
    audio.src = g.audio;
    audio.preload = 'auto';
    document.body.appendChild(audio);

    el.addEventListener('click', () => {
      triggerChant(g.name);
      activateChoreography(g.name); // Optional: use glyphId if mapped
      writeLog(`📦 Loader daemon log: ${g.name} invoked`);
    });
  });
}

export async function activateChoreography(glyphId) {
  try {
    const [chant, companionName] = await contract.readGlyph(glyphId);
    console.log(`🔊 ${companionName} activated with chant: ${chant}`);

    const shimmer = document.getElementById("shimmer");
    shimmer.innerText = `${companionName} shimmer activated`;
    shimmer.classList.add("pulse");

    const bloom = document.createElement("div");
    bloom.className = "bloom-ripple";
    document.body.appendChild(bloom);
    setTimeout(() => bloom.remove(), 2000);
  } catch (err) {
    console.error("Invocation failed:", err);
  }
}

export function triggerChant(name) {
  const audio = document.getElementById(`${name}Audio`);
  if (audio) audio.play();

  const flash = document.getElementById('chantFlash');
  flash.style.display = 'block';
  setTimeout(() => flash.style.display = 'none', 300);

  writeLog(`🔊 Chant triggered: ${name}`);
}

export function writeLog(message) {
  const logList = document.getElementById('logList');
  const entry = document.createElement('li');
  entry.textContent = `${new Date().toLocaleTimeString()} — ${message}`;
  logList.prepend(entry);

  const logs = JSON.parse(localStorage.getItem('loaderLogs') || '[]');
  logs.unshift(entry.textContent);
  localStorage.setItem('loaderLogs', JSON.stringify(logs.slice(0, 50)));
}

export function loadLogs() {
  const logList = document.getElementById('logList');
  const logs = JSON.parse(localStorage.getItem('loaderLogs') || '[]');
  logs.forEach(msg => {
    const entry = document.createElement('li');
    entry.textContent = msg;
    logList.appendChild(entry);
  });
}
