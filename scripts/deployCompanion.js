const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const name = process.env.COMPANION;
  if (!name) {
    console.error("❌ Set COMPANION env var. Example: COMPANION=Bootbark");
    process.exit(1);
  }

  const Companion = await hre.ethers.getContractFactory(name);
  const contract = await Companion.deploy();
  await contract.waitForDeployment();
  const address = await contract.getAddress();

  console.log(`🧿 ${name} deployed to: ${address}`);

  const filePath = path.join(__dirname, "..", "companions.json");
  const data = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf8"))
    : {};

  data[name] = address;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
