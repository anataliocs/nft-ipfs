const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmRBDqaMty128ioXnA26m2TfgiKRDcqynJ26mTDnneQnVp";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so spheronDevsContract here is a factory for instances of our LW3Punks contract.
  */
  const spheronDevsContract = await ethers.getContractFactory("SpheronDevs");

  // deploy the contract
  const deployedSpheronDevsContract = await spheronDevsContract.deploy(metadataURL);

  await deployedSpheronDevsContract.deployed();

  // print the address of the deployed contract
  console.log("SpheronDevs Contract Address:", deployedSpheronDevsContract.address);
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });