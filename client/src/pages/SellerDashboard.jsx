import React, { useContext, useState, useEffect } from 'react'
import "./sellerdashboard.css";
import { CardBuyerdashboard } from "../components/Card_buyerdashboard";
import { NavLink, useParams } from 'react-router-dom';
import Web3Context from '../contexts';
import { getSellerNFTs } from '../contexts/useContract/readContract';
const SellerDashboard = () => {
  const {add} = useParams();
  const {connectWallet, account, Contract, sellerI} = useContext(Web3Context);
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    getData();
   // console.log(nfts);
  }, [Contract, account, sellerI]);
  const getData = async () => {
    const res = await getSellerNFTs(Contract, sellerI);
    //console.log(res)
    setNfts(res);
  };
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
          <div to={`/createwarranty/${add}`} className='seller_button'>Create Warranty</div>
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
  )
}

export default SellerDashboard