import React from 'react';

const TransactionsHistory = (props) => {
  return (
    <div>
      {props.transactionsHistory.map((transaction, i) => {
        return (
          <div key={i}>
            From:{transaction.from} -- To: {transaction.to}
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsHistory;
