import React, {useState, useContext, useEffect} from 'react'
import './Navbar.css';
import * as PushApi from '@pushprotocol/restapi'
import * as ethers from 'ethers';
import Web3Context from '../contexts/index';
import Notif from './Notif';
import Web3 from 'web3';


const Navbar = () => {
  const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
  const [shownotifs, setshownotifs] = useState(true);
  setTimeout(() => {
    setshownotifs(false);
  }, 6000);
  // cons/ole.log(web3);
  const {connectWallet, account, checkIfWalletIsConnected} = useContext(Web3Context);
  const Pk = "476532d9d2367e760e0f67fea6557e21f734c58a7d1dee9a25ec96fe693a35e8";
  const Pkey = `0x${Pk}`;
  const signer = new ethers.Wallet(Pkey);
  // web3.eth.ens.getOwner('warr.eth').then((owner)=>{
  //   console.log(owner);
  // })
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [account]);
  const connectwalletfunc = () => {
    console.log("connecting");
    connectWallet();
  }
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
          {/* <Notif
            add = {account.currentAccount}
          /> */}
          {shownotifs?
          <Notif
            add = {account.currentAccount}
          />
          :
          <div></div>
          }
          <div className='navaddress'>
            Hey, {`${String(account.currentAccount).slice(0,7)}...${String(account.currentAccount).slice(String(account.currentAccount).length-7)}`}
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar