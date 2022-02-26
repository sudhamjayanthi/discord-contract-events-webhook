const { send } = require("@ayshptk/msngr")
const { abi } = require('./abi')
const { ethers } = require('ethers')

const webhook = process.env['webhook']
const nodeURL = process.env['nodeURL']

const contractAddress = "0xc6c5F7B1a27528DD6F34EF164377965114bfA7D9";

const provider = new ethers.providers.JsonRpcProvider(nodeURL);
const contract = new ethers.Contract(contractAddress, abi, provider.getSigner("0xeCf76CC823Fd31C1E473cfD3D2ca04DD2f338Fe3"))

contract.on("PlayerSeeksVerification", async (player) => {
	console.log("heard the event! lfgg!!!")
	await send(webhook, player + " seeks verification!");
})

