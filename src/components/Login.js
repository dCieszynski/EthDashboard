import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Dashboard from './Dashboard';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [defaultAccount, setDefaultAccount] = useState();
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const [provider, setProvider] = useState();
  const [balance, setBalance] = useState();
  const [transactionsHistory, setTransactionsHistory] = useState([]);

  //Get data when provider change
  useEffect(() => {
    getAccountBalance();
    getAccountTransfers();
  }, [provider]);

  //Get ballance of provider address
  const getAccountBalance = async () => {
    if (provider !== undefined) {
      const balance = await provider.getBalance(defaultAccount);
      const formatBalance = await ethers.utils.formatEther(balance);
      setBalance(parseFloat(formatBalance).toFixed(4));
    }
  };

  //Get history of address transactions
  const getAccountTransfers = async () => {
    if (defaultAccount !== undefined) {
      let network = 'ropsten';
      let etherscanProvider = new ethers.providers.EtherscanProvider(network);
      await etherscanProvider.getHistory(defaultAccount).then((history) => {
        setTransactionsHistory(history);
        console.log(history);
      });
    }
  };

  //Connecting MetaMask
  const connectWallet = async () => {
    //Get list of provider accounts
    const getAccounts = async () => {
      //Getting and setting new provider
      const getProvider = async () => {
        const provider = await new ethers.providers.Web3Provider(
          window.ethereum
        );
        setProvider(provider);
      };
      //Getting list of provider's accounts
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      //Setting provider and default account
      setDefaultAccount(accounts[0]);
      setConnButtonText('Wallet connected');
      getProvider();
    };

    //Checking if MetaMask is installed, if it is connect accounts, if not display error
    if (window.ethereum) {
      getAccounts();
    } else {
      setErrorMessage('Need to install MetaMask!');
    }
  };

  return (
    <div className='container container--login'>
      <button className='btn btn--login' onClick={connectWallet}>
        {connButtonText}
      </button>
      <Dashboard
        account={defaultAccount}
        balance={balance}
        transactionsHistory={transactionsHistory}
      />
      {errorMessage}
    </div>
  );
};

export default Login;
