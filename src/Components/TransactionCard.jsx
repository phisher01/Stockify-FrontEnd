import React from "react";

const TransactionCard = ({ type, amount, createdAt }) => {
  const isCredit = type === "credit";
  const formattedDate = new Date(createdAt).toLocaleString();

  return (
    <div className="txn-card">
      <div className="txn-left">
        <p className="txn-type">{isCredit ? "Credited" : "Debited"}</p>
        <p className="txn-date">{formattedDate}</p>
      </div>
      <div className={`txn-amount ${isCredit ? "credit" : "debit"}`}>
        {isCredit ? "+" : "-"}₹{amount.toFixed(2)}
      </div>
    </div>
  );
};

export default TransactionCard;
