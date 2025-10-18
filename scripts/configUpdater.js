import fs from "fs";
import path from "path";

export function updateConfig({ contractName, address, network, steward }) {
  const configPath = path.resolve("config.json");
  const config = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, "utf-8"))
    : { contracts: {}, dashboard: {}, shimmer: {} };

  config.contracts[contractName] = {
    address,
    network,
    deployed: new Date().toISOString(),
    steward
  };

  config.dashboard.lastUpdated = new Date().toISOString();

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(`📝 Config updated for ${contractName}`);
}
