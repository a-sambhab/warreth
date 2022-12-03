import React from "react";
import { useParams } from "react-router-dom";
import "./RegisterSeller.css";

const RegisterSeller = () => {
  const { add } = useParams();
  return (
    <div className="registercontain">
      <div className="registerinnercontain">
        <p className="registertext">Create Profile</p>
        <p className="registertextsmall">Wallet Address</p>
        <input className="textbox" type="text" />
        <p className="registertextsmall2">User Name</p>
        <input className="textbox2" type="text" />
        <p className="registertextsmall3">Seller ID</p>
        <input className="textbox3" type="text" />
        <div className="buttontext">
          <button className="button" type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterSeller;
