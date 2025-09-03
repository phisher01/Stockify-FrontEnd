import React from "react";
import TransactionCard from "./TransactionCard";

const Transactions = ({ transactions }) => {
    console.log(transactions)
  return (
    <div className="transactions-container">
      <h2>Recent Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions
          .slice() // clone so reverse doesn't mutate original
          .reverse()
          .map((txn, index) => (
            <TransactionCard
              key={index}
              type={txn.type}
              amount={txn.amount}
              createdAt={txn.timestamp}
            />
          ))
      )}
    </div>
  );
};

export default Transactions;
