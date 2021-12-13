import React from 'react';
import { ethers } from 'ethers';
import { BigNumber } from 'ethers';

const TransactionsHistory = (props) => {
  return (
    <div className='transactionsHistory'>
      <h2 className='header header-transactionsHistory'>
        Transactions History
      </h2>
      <div className='table'>
        <div className='table-headers'>
          <h3 className='header header--table'>From address</h3>
          <h3 className='header header--table'>To address</h3>
          <h3 className='header header--table'>Transfered Value</h3>
        </div>
        {props.transactionsHistory.map((transaction, i) => {
          //Swap to functions
          return (
            <div className='table-row' key={i}>
              <div className='table-col'>{transaction.from}</div>
              <div className='table-col'>{transaction.to}</div>
              <div className='table-col'>
                {parseFloat(
                  ethers.utils.formatEther(
                    BigNumber.from(transaction.value._hex)
                  )
                ).toFixed(4)}{' '}
                ETH
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionsHistory;
