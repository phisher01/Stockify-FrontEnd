
import axios from "axios";

import { VerticalGraph } from "./verticalGraph";
import { Dataset } from "@mui/icons-material";

const Holdings = ({ holdings, userId, setUser , invested, currVal }) => {

  const labels=holdings.map((stock)=>{
    return stock.name;


  });
  const data={
    labels,
    datasets:[
      {
        label:"Stock Price",
        data:holdings.map((stock)=>{
          return stock.price;

        }),
        backgroundColor: "rgba(255,99,132,0.5)",

      }
    ]
  }

   function calculateReturn(totalInvested, currValue) {
  if (totalInvested === 0) return "N/A"; // prevent division by zero
  const profit = currValue - totalInvested;
  const percentage = (profit / totalInvested) * 100;
  return percentage.toFixed(2) + "%";
}
  const increment=calculateReturn(invested,currVal);

  const handleSell = async (stock) => {
    try {
      const response = await axios.post("https://stockify-backend-0khv.onrender.com/sell", {
        userId,
        stockId: stock._id,
      });
      const { message, newOrder, prevPrice } = response.data;
      // console.log("order",order)
     
      setUser((prev) => {
        // 1) remove this stock from holdings
        const updatedHoldings = prev.holdings.filter((h) => h._id !== stock._id);

        // 2) refund the user’s cash balance: use the LTP * qty
        const refundAmount = stock.price ;

        // 3) deduct invested amount: prevPrice * qty
        const investedDeduction = prevPrice ;

        const newBalance = prev.cashBalance + refundAmount;
        const newInvested = prev.totalInvested - investedDeduction;
        const newCurrValue=prev.currentValue-stock.price;
        

        // 4) append the new order to orders array
        const updatedOrders = [newOrder, ...prev.orders];

        return {
          ...prev,
          holdings: updatedHoldings,
          cashBalance: newBalance,
          totalInvested: newInvested,
          orders: updatedOrders,
          currentValue:newCurrValue
        };
      });
    } catch (err) {
      console.error("Sell failed:", err);
      // show error to user if you like
    }
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{stock.name}</span>
                    <button
                      onClick={() => handleSell(stock)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "#ff4d4f",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Sell
                    </button>
                  </td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {Number(invested).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {Number(currVal).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{Number(currVal-invested).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({increment})</h5>
          <p>Profit &amp;Losses </p>
        </div>
      </div>
      <VerticalGraph data={data}></VerticalGraph>
    </>
  );
};

export default Holdings;
