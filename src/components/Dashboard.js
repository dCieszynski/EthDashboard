import React from 'react';
import TransactionsHistory from './TransactionsHistory';
import UserInfo from './UserInfo';

const Dashboard = (props) => {
  return (
    <div className='dashboard'>
      <UserInfo account={props.account} balance={props.balance} />
      <TransactionsHistory
        account={props.account}
        transactionsHistory={props.transactionsHistory}
      />
    </div>
  );
};

export default Dashboard;
