import React from "react";

const Summary = ({name,margin,invested,currVal}) => {

  const profClass=(currVal-invested)<0?"loss":"profit";
  function calculateReturn(totalInvested, currValue) {
  if (totalInvested === 0) return "N/A"; // prevent division by zero
  const profit = currValue - totalInvested;
  const percentage = (profit / totalInvested) * 100;
  return percentage.toFixed(2) + "%";
}
const increment=calculateReturn(invested,currVal);
  return (
    <>
      <div className="username">
        <h6>Hi,{name  }</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 style={{color:"blue"}}><i class="fa-solid fa-indian-rupee-sign"></i> {Number(margin).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{Number(invested).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3   style={profClass=="loss"? {color: "rgb(250, 118, 78)"}:{color:"green"}}>
              <i class="fa-solid fa-indian-rupee-sign"></i> {(currVal-invested).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
} <small>{increment}%</small>{" "}
            </h3>
            <p>Profit & Losses</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{Number(currVal).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}</span>{" "}
            </p>
            <p>
              Investment <span>{Number(invested).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
