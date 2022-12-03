import React from "react";
import { useParams } from "react-router-dom";
import "./CreateWarranty.css";

const CreateWarranty = () => {
  const { add } = useParams();
  return (
    <>
      <div className="createcontain">
        <div className="createinnercontain">
          <p className="createtext">Create Warranty</p>
          <p className="createtextsmall">Wallet Address</p>
          <input className="textboxcreate" type="text" />
          <p className="createtextsmall2">Order ID</p>
          <input className="textbox2create" type="text" />
          <p className="createtextsmall3">Buyer Wallet ID</p>
          <input className="textbox3create" type="text" />
          <p className="createtextsmall4">Validity</p>
          <input className="textbox4create" type="text" />
          <div>
            <h1 className="imagewarranty">Upload Image</h1>
            <input className="buttonimage" type="file" />
          </div>
          <div className="buttontextcreate">
            <button className="buttoncreate" type="submit">
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
      
    </>
  );
};

export default CreateWarranty;
