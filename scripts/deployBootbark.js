async function main() {
  const Bootbark = await ethers.getContractFactory("Bootbark");
  const bootbark = await Bootbark.deploy();
  await bootbark.waitForDeployment(); // replaces .deployed()

  console.log("Bootbark deployed to:", await bootbark.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
