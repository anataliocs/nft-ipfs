const hre = require("hardhat");
async function main() {

    const SpheronDevs = await hre.ethers.getContractFactory("SpheronDevs");

    // Connect to the deployed contract
    const contractAddress = "0xa30AeCeFb798591EB422a841f85A88626CC41204"; // Replace with your deployed contract address
    const contract = await SpheronDevs.attach(contractAddress);

    contract.mint()

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});