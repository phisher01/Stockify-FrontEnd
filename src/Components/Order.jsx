import React from "react";

const OrderCard = ({ name, price, orderAt, type, status }) => {
  const isBuy = type.toLowerCase() === "buy";
  const isCompleted = status.toLowerCase() === "completed";

  return (
    <div
      style={{
        backgroundColor: "#f0f8ff", // soft blue
        borderRadius: "12px",
        padding: "16px 20px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        // maxWidth: "480px",
        fontFamily: "Segoe UI, sans-serif",
        display: "flex",
        flexDirection: "column",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom: "16px",
        gap: "10px",
      }}
    >
      {/* Top Row: Name + Type (left), Price + Status (right) */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Stock name & Order type */}
        <div>
          <div style={{ fontSize: "1.2rem", fontWeight: 600, color: "#333" }}>{name}</div>
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              color: isBuy ? "#1890ff" : "#ff4d4f",
              backgroundColor: isBuy ? "#e6f7ff" : "#fff1f0",
              padding: "2px 8px",
              borderRadius: "6px",
              display: "inline-block",
              marginTop: "4px",
            }}
          >
            {type.toUpperCase()}
          </div>
        </div>

        {/* Right: Price & Status */}
        <div style={{ textAlign: "right" }}>
          <div style={{ fontWeight: 500, fontSize: "1rem", color: "#555" }}>₹{price}</div>
          <div
            style={{
              marginTop: "4px",
              backgroundColor: isCompleted ? "#d9f7be" : "#fffbe6",
              color: isCompleted ? "#389e0d" : "#d48806",
              padding: "2px 10px",
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: 500,
              display: "inline-block",
            }}
          >
            {status}
          </div>
        </div>
      </div>

      {/* Bottom: Order date */}
      <div style={{ fontSize: "0.85rem", textAlign:"center",color: "#888", marginTop: "4px" }}>
        Ordered At: {orderAt}
      </div>
    </div>
  );
};

export default OrderCard;
