import React, {useState, useContext, useEffect} from 'react'
import './Navbar.css';
import Web3Context from '../contexts/index';

const Navbar = () => {
  const {connectWallet, account, checkIfWalletIsConnected} = useContext(Web3Context);
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  console.log(account.currentAccount)
  // const [connected, setConnected] = useState();
  const connectwalletfunc = () => {
    console.log("connecting");
    connectWallet();
    // setConnected(true);
  }
  return (
    <div className='navcontainer'>
      <div className='navlogo'>
        LOGOOOOO
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