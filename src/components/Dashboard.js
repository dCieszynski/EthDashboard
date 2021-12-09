import { ethers } from 'ethers';
import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <div>User account: {props.account}</div>
      <div>Balance: {props.balance}</div>
    </div>
  );
};

export default Dashboard;
