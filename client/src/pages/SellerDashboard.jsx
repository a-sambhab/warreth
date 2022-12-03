import React from "react";
import "./sellerdashboard.css";
import { CardBuyerdashboard } from "../components/Card_buyerdashboard";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
import { NavLink, useParams } from 'react-router-dom';
import Web3Context from '../contexts';
import { getSellerNFTs } from '../contexts/useContract/readContract';
>>>>>>> c631359b3abad97fd3ff8a58ee44176f26e1bcb1
const SellerDashboard = () => {
<<<<<<< HEAD
  const {add} = useParams();
  const {connectWallet, account, Contract, sellerI} = useContext(Web3Context);
  const [nfts, setNfts] = useState([]);
  const [status, setStatus] = useState(0)
  useEffect(() => {
    getData();
   // console.log(nfts);
  }, [Contract, account, sellerI]);
  const getData = async () => {
    console.log(sellerI);
    const res = await getSellerNFTs(Contract, sellerI);
    console.log(res);
    setNfts(res);
  };
  return (
    <>
         <div className="buyercontain">
      <div className="buyerinnercontain">
        <div className="buyersidebar">
          <div className="buyersidebar_warranties">
            <div className="active_userwarranty" onClick={()=>{setStatus(2)}}>Active Warranties</div>
            <div className="active_userwarranty" onClick={()=>{setStatus(0)}}>Pending Warranties</div>
            <div className="active_userwarranty" onClick={()=>{setStatus(3)}}>Expired Warranties</div>
          </div>
          <NavLink to={`/createwarranty/${add}`} className='seller_button'>Create Warranty</NavLink>
        </div>
        <div className="buyermain">
          <div className="buyermain_cards">
          {
            nfts.length && nfts
              .filter((res)=>res.status==status)
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
                )
              })

          }
            {/* <CardBuyerdashboard />
            <CardBuyerdashboard />
            <CardBuyerdashboard />
            <CardBuyerdashboard /> */}
=======
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
>>>>>>> 6512b01c7410f7ed7672db8c1de7cffb6ebd039a
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
