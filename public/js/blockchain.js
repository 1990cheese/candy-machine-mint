    const ABI = [
        {
        "inputs": [
            {
            "internalType": "string",
            "name": "name",
            "type": "string"
            },
            {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
            },
            {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
        },
        {
        "inputs": [],
        "name": "MAX_COLLECTABLE_PURCHASE",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "MAX_COLLECTABLE_SUPPLY",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "PRICE_PER_COLLECTABLE",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "SALE_START_TIME",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "operator",
            "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            },
            {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "operator",
            "type": "address"
            },
            {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "numberOfCollectables",
            "type": "uint256"
            }
        ],
        "name": "mintCollectable",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
            }
        ],
        "name": "getNFTPrice",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        },
        {
        "inputs": [
            {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
        }];
    const NETWORK = 'rinkeby'
    const MAX_TOKEN_MINT = 33
    const ADDRESS = "0x1AC519A384FfD6B6015754A80113b5C28A42E4aE"
    
    let requestedTokens = 1
    
    window.onload = function() {
        // document.getElementById("success").style.display = "none";
        (async function () {
            if (typeof window.web3 !== 'undefined') {
                // Use existing gateway
                window.web3 = new Web3(window.ethereum);
            
            } else {
                alert("No Ethereum interface injected into browser. Read-only access");
            }
            await window.ethereum.request({'method' : 'eth_requestAccounts'});
            await window.web3.eth.net.getNetworkType()
                .then((network) => {console.log(network);if(network !== NETWORK){alert("You are on " + network+ " network. Change network to "+NETWORK+" or you won't be able to do anything here")} });  
            // const accounts = await window.web3.eth.getAccounts();
        })();
    }

    function handleNumCollectables(amount) {
        console.log(amount)
        if( (amount + requestedTokens) <= MAX_TOKEN_MINT && (amount + requestedTokens) > 0 ){
            requestedTokens += amount
            console.log("here")
        }
        document.getElementById("numTokens").innerText = requestedTokens
    }
    

    function displayError(e){
        alert(e.message.split('\n')[0]);
    }

    mint = async () => {
        const accounts = await window.web3.eth.getAccounts();
        const walletAddress = accounts[0]

        const contractInstance = new window.web3.eth.Contract(ABI, ADDRESS); 

        if (contractInstance){
            
            contractInstance.methods.getNFTPrice(requestedTokens)
                .call()
                .then((totalPurchasePrice) => {

                    contractInstance.methods.mintCollectable(requestedTokens)
                        .estimateGas({from: walletAddress, value: totalPurchasePrice})
                        .then((gasAmount) => {

                            contractInstance.methods
                                .mintCollectable(requestedTokens)
                                .send({from: walletAddress, value: totalPurchasePrice, gas: Number(gasAmount)})
                                .on('transactionHash', function(hash){ console.log("transactionHash", hash)})
                                .on('confirmation', ()=>{document.getElementById("success").style.display = "block"})
                                .on('error', (e)=>{displayError(e)})
                                
                        })
                        .catch((e)=>{displayError(e)})

                })
                .catch((e)=>{alert("Sale has already ended")})

        } else {
            console.log("Could not get contract instance. Connect wallet.")
        }
    }

    document.getElementById('addOne').addEventListener("click", ()=>{handleNumCollectables(1)})
    document.getElementById('subOne').addEventListener("click", ()=>{handleNumCollectables(-1)})
    document.getElementById('mint').addEventListener("click", mint)

