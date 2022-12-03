import React, {useState, useContext, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Web3Context from "../contexts";
import {createSeller} from '../contexts/useContract/writeContract';
import "./RegisterSeller.css";

const RegisterSeller = () => {
  const { add } = useParams();
  const history = useNavigate();
  const [sellerid, setsellerid] = useState("");
  const [username, setUsername] = useState("")
  const {account, Contract} = useContext(Web3Context);
  useEffect(() => {
    const rand = Math.round(Math.random()*100000);
    setsellerid(rand);
  }, []);
  const create = async() => {
    await createSeller(sellerid, Contract, account.currentAccount);
    window.location.href = `/seller/${account.currentAccount}`;
  }
  const handlename = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  }
  
  return (
    <div className="registercontain">
      <div className="registerinnercontain">
        <p className="registertext">Create Profile</p>
        <p className="registertextsmall">Wallet Address</p>
        <input
          className="textbox" 
          type="text" 
          name="wallet"
          readOnly
          value={account.currentAccount ? account.currentAccount : "0x00"}
        />
        <p className="registertextsmall2">User Name</p>
        <input 
          className="textbox2" 
          type="text" 
          name="username"
          value={username}
          onChange={handlename}
        />
        <p className="registertextsmall3">Seller ID</p>
        <input 
          className="textbox3" 
          type="text" 
          name="sellerid"
          readOnly
          value={sellerid}
        />
        <div className="buttontext">
          <button className="button" type="submit" onClick={create}>
            Register
          </button>
        </div>
      </div>
      <div classname="backgroundimage_bg">
        <img
          className="backgroundpng"
          alt=""
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1670078174/ETHINDIA/bggg_zaks4g.png"
          align="left"
        />
      </div>
    </div>
  );
};

export default RegisterSeller;
