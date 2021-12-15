import React from "react";
import "./mint.css";
import divider from "../../assets/images/divider.png";
import mint from "../../assets/images/mint2.png";
import Header from "../Header/Header";
import Timer from "../Timer/Timer";
const Mint: React.FC = () => {
  const [count, setCount] = React.useState(1);
  const [timerVisible, setTimerVisible] = React.useState(true);

  return (
    <div id="Mint" className="mint-component">
      <Header header="MINT" />
      <div className="mint-inner-container">
        <img src={mint} alt="" />
        {!timerVisible ? (
          <div className="mint-inner-right">
            <h4>
              Crypto Keeperz remaining: <br /> 10000/10000
            </h4>
            <div className="inner-btn-group">
              <button
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
                disabled={count === 1}
              >
                -
              </button>
              <button className="btn-counter" disabled>
                {count}
              </button>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                disabled={count === 20}
              >
                +
              </button>
            </div>
            <span>Total Cost: {0.08 * count} ETH</span>
            <button className="mint-btn">Mint</button>
            <p>Maximum of 20 Crypto Keeperz per TX.</p>
            <p>
              Check minted collection at <a href="/">OpenSea</a>
            </p>
          </div>
        ) : (
          <div>
            <Timer
              timerVisible={timerVisible}
              setTimerVisible={setTimerVisible}
              mintStartAt={1632081600}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Mint;
