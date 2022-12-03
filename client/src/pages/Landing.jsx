import React, {useState, useContext, useEffect} from "react";
import * as PushApi from "@pushprotocol/restapi";
import "./Landing.css";
import Web3Context from "../contexts";
import { Link, NavLink } from "react-router-dom";


// const fetchNotifs = async () => {
//   const notifications = await PushApi.user.getFeeds({
//     user: "eip155:42:0xD8634C39BBFd4033c0d3289C4515275102423681", // user address in CAIP
//     env: "staging",
//   });

  // console.log("Notifications: \n\n", notifications);
// };

const RegisterButton = () => {
  const {sellerI,account} = useContext(Web3Context)
  // console.log(sellerI);
  const [isregistered, setisregistered] = useState(sellerI == 0 ?false : true);
  useEffect(() => {
    // setisregistered(sellerI!=0);
    console.log(sellerI);
    if(sellerI == 0){
      setisregistered(false);
    } else {
      setisregistered(true);
    }
  }, [sellerI]);
  // setTimeout(() => {
  //   setis
  // }, 1000);
  
  return(
    <>
      {
        isregistered?
          <div className="dashbuttons">
            <NavLink className="dashnavs" to={`/Buyer/${account.currentAccount}`}>I am a Buyer</NavLink>
            <NavLink className="dashnavs" to={`/Seller/${account.currentAccount}`}>I am a Seller</NavLink>
          </div>
        :
          <div className="registerbuttons">
            <NavLink className="registernav" to={`/register/${account.currentAccount}`} style={{ textDecoration: 'none' }}>Register</NavLink>
          </div>

      }
    </>
  )
}

const Landing = () => {
  const {account} = useContext(Web3Context)
  // fetchNotifs();
  return (
    <>
      <div className="landingpage">
        {/* <div className="landingcontain">Landing</div> */}
        <div className="landingpage_left">
          <div className="landingpage_left_text">
            <div className="landingpage_left_text_heading">WARRETH</div>
            {account.currentAccount==null?
            <div className="landingpage_left_text_subheading">
              We have something, we haven't thought yet.
            </div>
            :
              <RegisterButton/>
            }
          </div>
          <div className="landingpage_left_img">
            <img className="landingpage_left_img_triangle" alt="" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1670048162/ETHINDIA/triangle_nwcumv.png"/>
          </div>
        </div>
        <div className="landingpage_right">
          <div className="landingpage_right_image">
            <img alt="" className="landingpage_image" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1670049574/ETHINDIA/landingpageimg_hiavrd.png"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
