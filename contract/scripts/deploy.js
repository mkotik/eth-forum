const { ethers } = require("hardhat");

async function main() {
  const forumContract = await ethers.getContractFactory("Forum");
  const deployedForumContract = await forumContract.deploy("Hello, Welcome!");
  await deployedForumContract.deployed();
  console.log("Deployed Forum Contract", deployedForumContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(() => {
    console.log(err);
    process.exit(1);
  });
