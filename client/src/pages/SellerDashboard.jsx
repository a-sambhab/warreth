import React from "react";
import "./sellerdashboard.css";
import { CardBuyerdashboard } from "../components/Card_buyerdashboard";
import { NavLink } from "react-router-dom";
const SellerDashboard = () => {
  return (
    <>
      <div className="buyercontain">
        <div className="buyerinnercontain">
          <div className="buyersidebar">
            <div className="buyersidebar_warranties">
              <div className="active_userwarranty">Active Warranties</div>
              <div className="active_userwarranty">Pending Warranties</div>
              <div className="active_userwarranty">Expired Warranties</div>
            </div>
            <NavLink className="seller_button">Create Warranty</NavLink>
          </div>
          <div className="buyermain">
            <div className="buyermain_cards">
              <CardBuyerdashboard />
              <CardBuyerdashboard />
              <CardBuyerdashboard />
              <CardBuyerdashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
