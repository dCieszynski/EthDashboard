import React from 'react';
import { ethers } from 'ethers';
import { BigNumber } from 'ethers';

const TransactionsHistory = (props) => {
  const convertTimestamp = (timestamp) => {
    let date = new Date(timestamp * 1000);
    let month = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDate();
    let formettedTime = day + '.' + month + '.' + year;
    return formettedTime;
  };

  return (
    <div className='transactionsHistory'>
      <h2 className='header header-transactionsHistory'>
        Transactions History
      </h2>
      <div className='table'>
        <div className='table-content'>
          <div className='table__col'>
            <h3 className='header header--table'>Date</h3>
            {props.transactionsHistory.map((tx, i) => {
              return (
                <div className='table-row' key={i}>
                  {convertTimestamp(tx.timestamp)}
                </div>
              );
            })}
          </div>
          <div className='table__col'>
            <h3 className='header header--table'>From address</h3>
            {props.transactionsHistory.map((tx, i) => {
              return (
                <div className='table-row' key={i}>
                  {tx.from}
                </div>
              );
            })}
          </div>
          <div className='table__col'>
            <h3 className='header header--table'>To address</h3>
            {props.transactionsHistory.map((tx, i) => {
              return (
                <div className='table-row' key={i}>
                  {tx.to}
                </div>
              );
            })}
          </div>
          <div className='table__col'>
            <h3 className='header header--table'>Value</h3>
            {props.transactionsHistory.map((tx, i) => {
              return (
                <div className='table-row' key={i}>
                  {parseFloat(
                    ethers.utils.formatEther(BigNumber.from(tx.value._hex))
                  ).toFixed(4)}{' '}
                  ETH
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsHistory;
