import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Funds = ({ userId, setUser,margin,invested,currVal }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [transactionType, setTransactionType] = useState(""); // 'credit' or 'debit'
  const [amount, setAmount] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const openPopup = (type) => {
    setTransactionType(type);
    setPopupVisible(true);
    setAmount("");
  };

  const closePopup = () => {
    setPopupVisible(false);
    setTransactionType("");
    setAmount("");
  };

  

      const handleSubmit = async () => {
  const value = Number(amount);
  if (!value || value <= 0) return alert("Enter a valid amount");

  // Prevent overdraft
  if (transactionType === "debit" && value > margin) {
    return alert("Insufficient funds. You cannot withdraw more than available balance.");
  }

  try {
    const res = await axios.post("http://localhost:8080/transaction", {
      userId,
      amount: value,
      type: transactionType,
    });

    const newTxn = res.data;

    setUser((prev) => ({
      ...prev,
      cashBalance:
        transactionType === "credit"
          ? prev.cashBalance + value
          : prev.cashBalance - value,
      transactions: [...prev.transactions, newTxn],
    }));

    setAlertMsg(
      transactionType === "credit"
        ? `₹${value} added successfully!`
        : `₹${value} withdrawn successfully!`
    );

    setTimeout(() => setAlertMsg(""), 2500);
    closePopup();
  } catch (err) {
    console.error(`${transactionType} failed:`, err);
    alert("Transaction failed");
  }
};

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button className="btn btn-green" onClick={() => openPopup("credit")}>
          Add funds
        </button>
        <button className="btn btn-blue" onClick={() => openPopup("debit")}>
          Withdraw
        </button>
      </div>

      {/* Popup Input Modal */}
      {popupVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h3>{transactionType === "credit" ? "Add Funds" : "Withdraw Funds"}</h3>
            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="popup-actions">
              <button onClick={handleSubmit}>Confirm</button>
              <button onClick={closePopup} className="cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Alert Message */}
      {alertMsg && <div className="alert">{alertMsg}</div>}

      {/* User Summary */}
      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹{margin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹{invested}</p>
            </div>
            <div className="data">
              <p>Current Evaluation</p>
              <p className="imp">₹{currVal}</p>
            </div>
            
           
            <div className="data">
              <p>Account Opening Balance</p>
              <p>₹4,000</p>
            </div>
            
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
