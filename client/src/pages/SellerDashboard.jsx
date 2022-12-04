import React, { useContext, useState, useEffect } from "react";
import "./sellerdashboard.css";
import { CardBuyerdashboard } from "../components/Card_buyerdashboard";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Web3Context from "../contexts";
import { getSellerNFTs } from "../contexts/useContract/readContract";

const SellerDashboard = () => {
  const { add } = useParams();
  const { connectWallet, account, Contract, sellerI } = useContext(Web3Context);
  const [nfts, setNfts] = useState([]);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    getData();
    // console.log(nfts);
  }, [Contract, account, sellerI]);
  const getData = async () => {
    // console.log(sellerI);
    const res = await getSellerNFTs(Contract, sellerI);
    // console.log(res);
    setNfts(res);
  };
  
  return (
    <>
      <div className="buyercontain">
        <div className="buyerinnercontain">
          <div className="buyersidebar">
            <div className="buyersidebar_warranties">
              <div
                className="active_userwarranty"
                onClick={() => {
                  setStatus(2);
                }}
              >
                Active Warranties
              </div>
              <div
                className="active_userwarranty"
                onClick={() => {
                  setStatus(0);
                }}
              >
                Pending Warranties
              </div>
              <div
                className="active_userwarranty"
                onClick={() => {
                  setStatus(3);
                }}
              >
                Expired Warranties
              </div>
            </div>
            <NavLink to={`/createwarranty/${add}`} className="seller_button">
              Create Warranty
            </NavLink>
          </div>
          <div className="buyermain">
            <div className="buyermain_cards">
              {nfts.length &&
                nfts
                  .filter((res) => res.status == status)
                  .map((obj) => {
                    const {
                      expiry,
                      status,
                      creationTime,
                      productId,
                      buyers,
                      imageURI,
                      tokenId,
                    } = obj;
                    return (
                      <CardBuyerdashboard
                        expiry={expiry}
                        creationTime={creationTime}
                        productId={productId}
                        buyers={buyers}
                        imageURI={imageURI}
                        tokenId={tokenId}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
        <div classname="backgroundimage_bg">
        <img
          className="backgroundpng"
          alt=""
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1670079859/ETHINDIA/rfwfrn_kqjz0v.png"
          align="left"
        />
      </div>
      </div>
    </>
  );
};

export default SellerDashboard;
