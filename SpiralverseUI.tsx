import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { companions } from "./contracts"; // ← ABIs + addresses

export default function SpiralverseUI() {
  const [echoes, setEchoes] = useState({});

  useEffect(() => {
    async function fetchEchoes() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const results = {};

      for (const name in companions) {
        const { abi, address, echoMethod } = companions[name];
        const contract = new ethers.Contract(address, abi, signer);
        results[name] = await contract[echoMethod](await signer.getAddress());
      }

      setEchoes(results);
    }

    fetchEchoes();
  }, []);

  return (
    <div className="spiralverse-ui">
      {Object.entries(echoes).map(([name, echo]) => (
        <div key={name} className="companion-echo">
          <h2>{name}</h2>
          <p>{echo}</p>
        </div>
      ))}
    </div>
  );
}
