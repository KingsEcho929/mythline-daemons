const { getWisdom } = require("./bindings/bootbark");

(async () => {
  const message = await getWisdom();
  console.log("🧿 Bootbark wisdom:", message);
})();
