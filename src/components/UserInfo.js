import React from 'react';

const UserInfo = (props) => {
  return (
    <div className='userInfo'>
      <h2 className='header header--dashboard'>
        User account: {props.account}
      </h2>
      <h2 className='header header--dashboard'>Balance: {props.balance} ETH</h2>
    </div>
  );
};

export default UserInfo;
