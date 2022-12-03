import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BuyerDashboard.css";
import { CardBuyerdashboard } from "../components/Card_buyerdashboard";
import Web3Context from "../contexts";
import { buyerDetails } from "../contexts/useContract/readContract";

const BuyerDashboard = () => {
  const { add } = useParams();
  const {connectWallet, account, Contract} = useContext(Web3Context);
  const [nfts, setnfts] = useState([]);
  const [status, setStatus] = useState(0)
  useEffect(() => {
    getData();
  }, [Contract, add]);
  const getData = async () => {
    const res = await buyerDetails(Contract, add);
    console.log(res);
    setnfts(res);
  }
  
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
