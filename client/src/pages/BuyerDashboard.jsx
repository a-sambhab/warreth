import React from "react";
import { useParams } from "react-router-dom";
import "./BuyerDashboard.css";
import { CardBuyerdashboard } from "../components/Card_buyerdashboard";

const BuyerDashboard = () => {
  const { add } = useParams();
  return (
    <div className="buyercontain">
      <div className="buyerinnercontain">
        <div className="buyersidebar">
          <div className="buyersidebar_warranties">
            <div className="active_userwarranty">Active Warranties</div>
            <div className="active_userwarranty">Pending Warranties</div>
            <div className="active_userwarranty">Expired Warranties</div>
          </div>
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
  );
};

export default BuyerDashboard;
