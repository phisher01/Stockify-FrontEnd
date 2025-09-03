import React from "react";
import PropTypes from "prop-types";

import NoOrder from "./noOrder";
import StockOrder from "./Order";

const Orders = ({ orders }) => {
  console.log("orders",orders);
  return (
    <div className="orders space-y-4">
      {orders.length === 0 ? (
        <NoOrder />
      ) : (
        orders.map((order) => (
          <StockOrder
            key={order._id}                // use _id, not id
            name={order.stockName}         // raw field
            price={order.price}
            type={order.type.toLowerCase()}// normalize for display
            orderAt={order.createdAt}      // pass the ISO string
            status={order.status}
          />
        ))
      )}
    </div>
  );
};

Orders.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      _id:       PropTypes.string.isRequired,  // raw Mongo ID
      stockName: PropTypes.string.isRequired,
      price:     PropTypes.number.isRequired,
      type:      PropTypes.string.isRequired,  // e.g. "BUY" or "SELL"
      createdAt: PropTypes.string.isRequired,  // ISO date string
      status:    PropTypes.string.isRequired,
      // we don’t need to validate every extra field here
    })
  ).isRequired,
};

export default Orders;
