import React, {useState, useContext, useEffect} from 'react'
import './Navbar.css';
import * as PushApi from '@pushprotocol/restapi'
import * as ethers from 'ethers';
import Web3Context from '../contexts/index';

const Navbar = () => {
  const {connectWallet, account, checkIfWalletIsConnected} = useContext(Web3Context);
  // const Pk = 
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [account])
  // console.log(account.currentAccount)
  // const [connected, setConnected] = useState();
  const connectwalletfunc = () => {
    console.log("connecting");
    connectWallet();
    // setConnected(true);
  }
  const fetchNotifs = async () => {
    const notifications = await PushApi.user.getFeeds({
      user: "eip155:42:0x6455b58DA58f21a7b18C9D85228DA958599843Da", // user address in CAIP
      env: "staging",
    });
  
    console.log("Notifications: \n\n", notifications);
  };
  fetchNotifs();
  return (
    <div className='navcontainer'>
      <div className='navlogo'>
        <img className='navlogo' alt='' src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1670048153/ETHINDIA/Screenshot_2022-12-02_at_8.25.53_PM-removebg-preview_mj5cbs.png'/>
      </div>
      {account.currentAccount==null?
        <div className='connectwallet'>
          <button className='connectbutton' onClick={connectwalletfunc}>
            Connect Wallet
          </button>
        </div>
      :
        <div className='connected'>
          <img src='https://res.cloudinary.com/dgy8ybeoy/image/upload/v1670044645/Group_mr6k1t.png' className='navnotif'/>
          <div className='navaddress'>
            Hey, {`${String(account.currentAccount).slice(0,7)}...${String(account.currentAccount).slice(String(account.currentAccount).length-7)}`}
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar