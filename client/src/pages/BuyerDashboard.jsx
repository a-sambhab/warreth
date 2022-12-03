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
            <div className="active_userwarranty" onClick={()=>{setStatus(2)}}>Active Warranties</div>
            <div className="active_userwarranty" onClick={()=>{setStatus(0)}}>Pending Warranties</div>
            <div className="active_userwarranty" onClick={()=>{setStatus(3)}}>Expired Warranties</div>
          </div>
        </div>
        <div className="buyermain">
          <div className="buyermain_cards">
          {nfts.length&&nfts
            .filter((res)=>res.status == status)
            .map((obj)=>{
              const {expiry, status, creationTime, productId, buyers, imageURI, tokenId} = obj;
              return(
                <CardBuyerdashboard
                  expiry = {expiry}
                  creationTime = {creationTime}
                  productId = {productId}
                  buyers = {buyers}
                  imageURI = {imageURI}
                  tokenId = {tokenId}
                />
              );
            })}
            {/* <CardBuyerdashboard />
            <CardBuyerdashboard />
            <CardBuyerdashboard />
            <CardBuyerdashboard /> */}
          </div>
        </div>
      </div>
      <div className="backgroundimage_bg">
        <img
          className="backgroundpng"
          alt=""
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1670079859/ETHINDIA/rfwfrn_kqjz0v.png"
          align="left"
        />
      </div>
    </div>
  );
};

export default BuyerDashboard;
