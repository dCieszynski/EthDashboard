import { ethers } from 'ethers';
import React from 'react';
import TransactionsHistory from './TransactionsHistory';

const Dashboard = (props) => {
  return (
    <div>
      <div>User account: {props.account}</div>
      <div>Balance: {props.balance}</div>
      <div>
        <div>Transactions hitsory</div>
        <TransactionsHistory transactionsHistory={props.transactionsHistory} />
      </div>
    </div>
  );
};

export default Dashboard;
