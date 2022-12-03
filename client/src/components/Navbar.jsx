import React, {useState, useContext, useEffect} from 'react'
import './Navbar.css';
import * as PushApi from '@pushprotocol/restapi'
import * as ethers from 'ethers';
import Web3Context from '../contexts/index';

const Navbar = () => {
  const {connectWallet, account, checkIfWalletIsConnected} = useContext(Web3Context);
  const Pk = "476532d9d2367e760e0f67fea6557e21f734c58a7d1dee9a25ec96fe693a35e8";
  const Pkey = `0x${Pk}`;
  const signer = new ethers.Wallet(Pkey);
  const sendNotifications = async() => {
    try{
      console.log("sending notifs");
      const ApiResponse = await PushApi.payloads.sendNotification({
        signer,
        type: 3,
        identityType: 2,
        notification: {
          title: `[SDK-TEST] notification TITLE`,
          body: `[SDK-TEST] notification BODY`,
        },
        payload: {
          title: `[SDK-TEST] payload TITLE`,
          body: `sample msg body`,
          cta: '',
          img: ''
        },
        recipients: 'eip155:5:0x6455b58DA58f21a7b18C9D85228DA958599843Da',
        channel: 'eip155:5:0x67d36FB0b3b6a1cC11343d17646A5D9c94a2d098',
        env: 'staging',
      });
      console.log('API response: ', ApiResponse);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchNotifs = async (acc) => {
    const notifications = await PushApi.user.getFeeds({
      user: `eip155:42:${acc}`, // user address in CAIP
      env: "staging",
    });
  
    console.log("Notifications: \n\n", notifications);
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [account]);
  // fetchNotifs(account.currentAccount);
  // console.log(account.currentAccount)
  // const [connected, setConnected] = useState();
  const connectwalletfunc = () => {
    console.log("connecting");
    connectWallet();
    // sendNotifications();
    // setConnected(true);
  }
  // fetchNotifs();
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