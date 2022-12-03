import React, {useState} from 'react'
import './Navbar.css';

const Navbar = () => {
  const [connected, setConnected] = useState(false);
  const connectwallet = () => {
    setConnected(true);
  }
  return (
    <div className='navcontainer'>
      <div className='navlogo'>
        LOGOOOOO
      </div>
      {connected?
        <div className='connected'>
          <img src='https://res.cloudinary.com/dgy8ybeoy/image/upload/v1670044645/Group_mr6k1t.png' className='navnotif'/>
          <div className='navaddress'>
            Hey, 0x84151...19655
          </div>
        </div>
      :
        <div className='connectwallet'>
          <button className='connectbutton' onClick={connectwallet}>
            Connect Wallet
          </button>
        </div>
      }
    </div>
  )
}

export default Navbar