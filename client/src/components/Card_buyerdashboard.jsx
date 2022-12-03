import React from "react";
import { NavLink } from "react-router-dom";
import "./card_buyerdashboard.css";

export const CardBuyerdashboard = (props) => {
  var date = new Date(props.expiry*1000);

  return (
    <>
      <NavLink to={`/warranty/${props.tokenId}`} className="card_buyerdashboard">
        <div className="card_buyerdashboard_heading">One plus</div>
        <div className="card_buyerdashboard_subheading">Description: One plus phone 8T</div>
        <div className="card_buyerdashboard_subheading">Token ID: #{props.tokenId} </div>
        <div className="card_buyerdashboard_subheading">Expiry Date: {String(date).slice(4,25)}</div>
      </NavLink>
    </>
  );
};
