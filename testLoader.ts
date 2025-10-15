const { loadCompanions } = require("./loader/companionLoader.ts");

const companions = loadCompanions();
console.log("🧿 Velmari lives at:", companions.Velmari);

