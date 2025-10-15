const fs = require("fs");
const path = require("path");

function loadCompanions() {
  const filePath = path.join(__dirname, "..", "companions.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

module.exports = { loadCompanions };
