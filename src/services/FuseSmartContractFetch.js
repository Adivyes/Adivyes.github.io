const Web3 = require('web3')
const abiTotal = require('./abiTotal.json')
const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.fuse.io"));



async function getTotalSupply(){
    const contractAddress = '0x249BE57637D8B013Ad64785404b24aeBaE9B098B'
    const contract = new web3.eth.Contract(abiTotal, contractAddress)
    try{
    const total = await contract.methods.totalSupply().call();
    return total
    }
    catch(err){console.log(err);}
    finally{}
}




export {
    getTotalSupply
}





