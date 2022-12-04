import React, { useState, useContext, useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getWarrantyDetails } from "../contexts/useContract/readContract";
import Web3Context from "../contexts";
import { verify,claim } from "../contexts/useContract/writeContract";
import './Activewarranty.css';
import Resell  from "./Resell";
// import { CardBuyerdashboard } from "../components/Card_buyerdashboard";



const Claim = (props) => {
  const { Contract, account } = useContext(Web3Context);
  const id = props.id;
  const [data, setData] = useState("");
  const [expiry, setExpiry] = useState("");
  const verifying = async () => {
    
    console.log("Start Verifying")
    const res = await verify(
      Contract,
      account.currentAccount,
      props.data.productId,
      Math.round(id/ 1000000),
      id
    );
    if(res){
      alert("You are verified")
      window.location.reload(false)
    }else{
      alert("Verification Failed")
      window.location.reload(false)
    }
  };
  const claiming = async()=>{
    await claim(Contract,account.currentAccount,Math.round(id/ 1000000),id);
    setTimeout(function () {
        window.location.href = `/buyer/${account.currentAccount}`;
      }, 4000);
  }
  // console.log(props.data);
  // "0x1ef6b7de70353c70f88ea01a5135bebf1dc8f2b1b9cb60702aca1c65325adb7e"

  return(
    <>
        {props.data && props.data.status == 0 ? (
            <button
              className="w-1/3 h-10 bg-new hover:bg-tertiary hover:text-black bottom-2 border-black rounded-xl text-white m-2"
              onClick={verifying}
            >
              Verify Ownership
            </button>
          ) : (
            <button
            className="w-1/3 h-10 bg-new hover:bg-tertiary hover:text-black bottom-2 border-black rounded-xl text-white m-2"
            onClick={claiming}
          >
            Claim Warranty NFT
          </button>
          )}
    </>
  );
}

const ResellH = (props) => {
  return(
    <>
      <NavLink className="resell_button" to={`/resell/${props.id}`}>Resell</NavLink>
      <div className="history_button">History</div>
    </>
  )
}

const ActiveWarranty = () => {
  const { Contract, account } = useContext(Web3Context);
  const { id } = useParams();
  const [data, setData] = useState("");
  const [expiry,setExpiry]=useState("");
  useEffect(() => {
    getDetails();
  }, [account]);

  const getDetails = async () => {
    const res = await getWarrantyDetails(Contract, id);
    // console.log(res)
    setData(res);
    // console.log(res.buyers[0])
    const date = new Date(res.expiry*1000);
    setExpiry(date)
  };
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
                <img src={data.imageURI} className="warrantyimage" />
                <div className="card_buyerdashboard_subheading">
                  Warranty ID: #{id}
                </div>
                <div className="card_buyerdashboard_subheading">
                  Product ID: {data.productId}
                </div>
                <div className="card_buyerdashboard_subheading">
                  Expiry Date: {expiry && String(expiry).slice(3.25)}
                </div>
                <div className="card_buyerdashboard_subheading">
                  Owner ID: 
                </div>
                {data && (data.status == 2 || data.status == 3) ? 
                  <a href={`https://testnets.opensea.io/assets/mumbai/0xeB5Cd3Df767b924527DE6866aE2f5233ff0a03c3/${data.tokenId}`} className="text-right mt-5 cursor-pointer underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              See at OpenSea
            </a>
                :
                <div></div>
                }
                <div className="cardbuttons">
                  {(data.status == 0 || data.status == 1)?
                  <Claim
                    data = {data}
                    id = {id}
                  />
                  :
                  <ResellH
                    id = {id}
                  />
                  }
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
