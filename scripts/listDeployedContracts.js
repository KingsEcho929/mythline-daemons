const fs = require("fs");
const path = require("path");

async function main() {
  const deploymentsDir = path.join(__dirname, "..", "deployments", "localhost");

  if (!fs.existsSync(deploymentsDir)) {
    console.error("❌ No deployments found in localhost folder.");
    return;
  }

  const files = fs.readdirSync(deploymentsDir);
  console.log("📦 Deployed Contracts:");

  files.forEach((file) => {
    if (file.endsWith(".json")) {
      const contractName = file.replace(".json", "");
      const data = JSON.parse(fs.readFileSync(path.join(deploymentsDir, file), "utf8"));
      console.log(`🧿 ${contractName}: ${data.address}`);
    }
  });
}

main().catch((error) => {
  console.error("❌ Listing failed:", error);
  process.exitCode = 1;
});
