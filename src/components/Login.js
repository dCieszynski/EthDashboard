import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Dashboard from './Dashboard';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [defaultAccount, setDefaultAccount] = useState();
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const [provider, setProvider] = useState();
  const [balance, setBalance] = useState();

  useEffect(() => {
    getAccountBalance();
  }, [provider]);

  const getAccountBalance = async () => {
    if (provider !== undefined) {
      const balance = await provider.getBalance(defaultAccount);
      const formatBalance = await ethers.utils.formatEther(balance);
      setBalance(formatBalance);
    }
  };

  const connectWallet = async () => {
    const getAccounts = async () => {
      const getProvider = async () => {
        const provider = await new ethers.providers.Web3Provider(
          window.ethereum
        );
        setProvider(provider);
      };
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setDefaultAccount(accounts[0]);
      setConnButtonText('Wallet connected');
      getProvider();
    };

    if (window.ethereum) {
      getAccounts();
    } else {
      setErrorMessage('Need to install MetaMask!');
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>{connButtonText}</button>
      <Dashboard account={defaultAccount} balance={balance} />
      {errorMessage}
    </div>
  );
};

export default Login;
