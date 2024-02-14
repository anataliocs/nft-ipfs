const hre = require("hardhat");
async function main() {

    const SpheronDevs = await hre.ethers.getContractFactory("SpheronDevs");

    // Connect to the deployed contract
    const contractAddress = "0xa30AeCeFb798591EB422a841f85A88626CC41204"; // Replace with your deployed contract address
    const contract = await SpheronDevs.attach(contractAddress);

    let resp = await contract.mint();

    console.log(resp);

}

const publicMint = async () => {
    try {
        console.log("Public mint");
        // We need a Signer here since this is a 'write' transaction.
        const signer = await getProviderOrSigner(true);
        // Create a new instance of the Contract with a Signer, which allows
        // update methods
        const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
        // call the mint from the contract to mint the SpheronDev NFT
        const tx = await nftContract.mint({
            // value signifies the cost of one SpheronDev NFTs which is "0.01" eth.
            // We are parsing `0.01` string to ether using the utils library from ethers.js
            value: utils.parseEther("0.01"),
        });
        setLoading(true);
        // wait for the transaction to get mined
        await tx.wait();
        setLoading(false);
        window.alert("You successfully minted a SpheronDev NFT!");
    } catch (err) {
        console.error(err);
    }
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});