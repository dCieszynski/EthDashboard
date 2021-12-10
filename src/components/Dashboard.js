import { ethers } from 'ethers';
import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <div>User account: {props.account}</div>
      <div>Balance: {props.balance}</div>
      <div>
        <div>Transactions hitsory</div>
        <div>
          {props.transactionsHistory.map((transaction, i) => {
            return (
              <div key={i}>
                From:{transaction.from} -- To: {transaction.to}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
