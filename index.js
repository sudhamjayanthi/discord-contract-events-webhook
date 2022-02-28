const { send } = require("@ayshptk/msngr")
const { ethers } = require('ethers')

// discord webhook url
const WEBHOOK = process.env['webhook']

// a rpc endpoint for a ethereum node to access events
const NODEURL = process.env['nodeURL']   

 // address of the contract you want to listen to
const contractAddress = "0xc6c5F7B1a27528DD6F34EF164377965114bfA7D9"

// name of the event you want to listen to 
const eventName = "PlayerSeeksVerification" 

// public key of a wallet to listen to events 
const signer = "0xeCf76CC823Fd31C1E473cfD3D2ca04DD2f338Fe3" 

// read the contract abi from abi.json 
const { ABI } = require('./abi') 

const provider = new ethers.providers.JsonRpcProvider(NODEURL);
const contract = new ethers.Contract(contractAddress, ABI, provider.getSigner(signerAddress))

contract.on(eventName, async (playerAddress) => {
	
	console.log("new event triggered : ", eventName)

	// a example usage of a the event details
	console.log(playerAddress, " seeks verification!") 

})

