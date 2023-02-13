import * as Web3 from '@solana/web3.js'

async function getBalanceUsingWeb3(address: Web3.PublicKey): Promise<number> {
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    return connection.getBalance(address);
}

const publicKey = new Web3.PublicKey('7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp')
getBalanceUsingWeb3(publicKey).then(balance => {
    console.log(balance)
})