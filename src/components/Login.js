import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Dashboard from './Dashboard';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [defaultAccount, setDefaultAccount] = useState();
  const [connButtonText, setConnButtonText] = useState('Connect Wallet');

  const [provider, setProvider] = useState({});
  const [signer, setSigner] = useState();

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText('Wallet connected');
        });
    } else {
      setErrorMessage('Need to install MetaMask');
    }

    const accountChangedHandler = (newAccount) => {
      setDefaultAccount(newAccount);
    };
  };
  return (
    <div>
      <button onClick={connectWallet}>{connButtonText}</button>
      <Dashboard accout={defaultAccount} />
      <div>{defaultAccount}</div>
      {errorMessage}
    </div>
  );
};

export default Login;
