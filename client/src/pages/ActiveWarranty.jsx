import React from "react";
import './Activewarranty.css';
// import { CardBuyerdashboard } from "../components/Card_buyerdashboard";

const ActiveWarranty = () => {
  return (
    <>
      <div className="buyercontain">
        <div className="buyerinnercontain">
          {/* <div className="buyersidebar">
            <div className="buyersidebar_warranties">
              <div className="active_userwarranty">Active Warranties</div>
              <div className="active_userwarranty">Pending Warranties</div>
              <div className="active_userwarranty">Expired Warranties</div>
            </div>
          </div> */}
          <div className="buyermain">
            <div className="buyermain_cards">
              <div className="product_card">
                <div className="card_buyerdashboard_heading">One plus</div>
                <div className="card_buyerdashboard_subheading">
                  Description: One plus phone 8T
                </div>
                <div className="card_buyerdashboard_subheading">
                  Token ID: #DIJD654DF{" "}
                </div>
                <div className="card_buyerdashboard_subheading">
                  Expiry Date: 22nd Nov 2023
                </div>
                <div className="cardbuttons">
                  <div className="resell_button">Resell</div>
                  <div className="history_button">History</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveWarranty;
