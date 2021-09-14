import React from "react";
import "./roadMap.css";
import Header from "../Header/Header";

const RoadMap: React.FC = () => {
  return (
    <div id="RoadMap" className="road-map">
      <Header header="ROAD MAP" />
      <div className="vertical-time-line">
        <span className="vertical-divider web-v-divider"></span>
        <div className="inner-line left">
          <div className="percent left">0%</div>
          <div className="line-detail left">
            <h4>0% SOLD</h4>
            <p>
              BUILD THE COMMUNITY THROUGH MAKING COLLABORATIONS AND GIVEAWAYS
            </p>
          </div>
        </div>
        <div className="inner-line right">
          <div className="percent right">25%</div>
          <div className="line-detail right">
            <h4>25% (RANDOM AIRDROP)</h4>
            <p>
              NFT GIVEAWAY 100 NFT RANDOMLY AIRDROPPED TO EARLY ADOPTORS.
              ASSEMBLE IN THE DISCORD AND SUBMIT A DERIVATIVE IN YOUR STYLE. THE
              COMMUNITY WILL DECIDE ON A WINNER. WINNER WILL RECEIVE A FREE
              AIRDROP AND 1 ETH AIRDROP HOLDERS WILL GAIN
              <li>EARLY ACCESS TO NEW RELEASES</li>
              <li>METAVERSE PRIVILIGIES</li>
            </p>
          </div>
        </div>
        <div className="inner-line left">
          <div className="percent left">50%</div>
          <div className="line-detail left">
            <h4>50% SOLD</h4>
            <p>
              EXCLUSIVE MERCHANDIZE GET UNLOCKED BASED ON CHARACTERS AESTHETICS,
              FEATURING HOODIES/HATS/ T-SHIRT AND OTHER GOODIES
            </p>
          </div>
        </div>
        <div className="inner-line right">
          <div className="percent right">75%</div>
          <div className="line-detail right">
            <h4>75% SOLD METAVERSE PLANNING BEGINS</h4>
            <p>
              THE COMMITY GET TO SUBMIT AN IDEA ON WHAT THEY WOULD LIKE TO HAVE
              BUILT. AND THE COMMUNITY VOTE. THE WINNING IDEA GET 1ETH
            </p>
          </div>
        </div>
        <div className="inner-line left">
          <div className="percent left">100%</div>
          <div className="line-detail left">
            <h4>100% SOLD</h4>
            <p>
              CRYPTO KEEPERS LIQUIDITY POOL IS INITATED BUY UP THE FLOOR ON THE
              SECONDARY MARKET TO MAINTAIN THE PRICE
            </p>
          </div>
        </div>
        <div className="inner-line left end">
          <div className="percent end">End</div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
