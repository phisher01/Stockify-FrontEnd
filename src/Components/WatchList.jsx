import React, { useState } from "react";
import {DoughnutChart} from "./DoughnutChart"
import axios from "axios";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
  Dataset,
} from "@mui/icons-material";

const WatchList = ({ holdings, stocks,setStocks, userId, setUser,margin }) => {
  console.log(holdings)
  console.log(stocks.map((s)=>s.name))
  
  const available = stocks.filter(
    (s) => {
      console.log("rerenders");
    return   !holdings.some((h) => h._id === s._id)
    }
  
  );
  
  const  labels=  available.map((stock)=>{ return stock.name});
  const data={
    labels,
    datasets:[
      {
        label:"Price",
        data:available.map((stock)=>{return stock.price}),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
      
    ]
  }
  console.log(available)
  // console.log(margin)


  
  const handleBuy = async (stock) => {
  if (stock.price > margin) {
    alert("Insufficient margin to buy this stock.");
    return;
  }

  try {
    const { data } = await axios.post("http://localhost:8080/buy", {
      userId,
      stockId: stock._id,
    });

    const { message, newOrder } = data;
    console.log("Buy succeeded:", message);

    setUser((prev) => {
      const updatedHoldings = [stock, ...prev.holdings];
      const cost = stock.price;
      const newBalance = prev.cashBalance - cost;
      const newInvested = prev.totalInvested + cost;
      const newCurrValue = prev.currentValue + cost;
      const updatedOrders = [newOrder, ...prev.orders];

      return {
        ...prev,
        holdings: updatedHoldings,
        cashBalance: newBalance,
        totalInvested: newInvested,
        currentValue: newCurrValue,
        orders: updatedOrders,
      };
    });


  } catch (err) {
    if (err.response) {
      console.error("Buy API error:", err.response.status, err.response.data);
    } else {
      console.error("Buy request error:", err.message);
    }
  }
};

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Your Watchlists…"
          className="search"
        />
        <span className="counts">{available.length} </span>
      </div>

      <ul className="list">
        {available.map((stock) => (
          <WatchListItem
            key={stock._id}
            stock={stock}
            onBuy={() => handleBuy(stock)}
          />
        ))}
      </ul>
      <DoughnutChart data={data}></DoughnutChart>
    </div>
  );
};

const WatchListItem = ({ stock, onBuy }) => {
  const [hover, setHover] = useState(false);

  return (
    <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {hover && <WatchListActions stock={stock} onBuy={onBuy} />}
    </li>
  );
};

const WatchListActions = ({ stock, onBuy }) => {
  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={onBuy}>Buy</button>
      </Tooltip>
      
      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};

export default WatchList;
