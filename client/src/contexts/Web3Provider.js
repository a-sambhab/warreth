/* eslint-disable */
import React, { useState } from 'react';
import NFTWarranty from '../contracts/NFTWarranty.json';
import { Web3Context } from './index';
import Web3 from 'web3';
import { sellerId } from './useContract/readContract';

const Web3Provider = ({ children }) => {
  //const [chainId,setChain]=useState("")
  const [account, setAccount] = useState({
    accounts: null,
    currentAccount: null,
  });
  const [Contract, setContract] = useState('');
  const [sellerI,setSellerId] = useState(0)

  // const connectWeb3 = new Promise(async (resolve) => {
  //   const web3 = await getWeb3();
  //   resolve(web3);
  // });
  //Connect Wallet utility
 // const randomNumber = Math.round(Math.random() * 1000000);
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      // console.log('Connected', accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    } else {
      // console.log('We have the ethereum object');
    }
    var web3 = new Web3(window.ethereum);

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const chain = await web3.eth.getChainId()
    //setChain(chain)
    // console.log('chain ID:', chain);
     setAccount({
        accounts: accounts,
        currentAccount: accounts[0],
      });

    if (accounts.length !== 0) {
      //const account = accounts[0];
      // console.log('Found an authorized account:', account);
     
      //console.log(chain)
      getContract(chain,accounts);
      return true;
     
    } else {
      console.log('No authorized account found');
      return false;
    }
  };
  const getContract = (chain,accounts) => {
    //console.log(provider,signer);
    var web3 = new Web3(window.ethereum);
    
    //const networkId = await web3.eth.net.getId();
    const deployedNetwork = NFTWarranty.networks[chain];

    const instance = new web3.eth.Contract(
      NFTWarranty.abi,
      deployedNetwork && deployedNetwork.address
    );
    //console.log(account.currentAccount)

    //console.log(instance)
    setContract(instance);
    seller(instance,accounts[0])
  };

  const seller = async(Contract,acc)=>{
    // console.log(Contract)
    // console.log(acc)
  const res = await sellerId(Contract, acc);
  //console.log(res);
  setSellerId(res)
}

  return (
    <Web3Context.Provider
      value={{ connectWallet, checkIfWalletIsConnected, account, Contract,sellerI }}
    >
      {children}
    </Web3Context.Provider>
  );
};
export default Web3Provider;
