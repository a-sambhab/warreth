import React, {useState} from 'react'
import * as PushApi from '@pushprotocol/restapi'
import './Notif.css'

const NotifUI = (props) => {
  console.log(props.message);
  return(
    <>
    
      {props.message}
    </>
  )
}

const Notif = (props) => {
  // console.log(props.add)
  const [shownotifs, setshownotifs] = useState(true);
  setTimeout(() => {
    setshownotifs(false);
  }, 6000);
  const [notifs, setNotifs] = useState([]);
  const fetchNotifs =  async (acc) => {
    const notification = await PushApi.user.getFeeds({
      user: `eip155:42:${acc}`,
      spam: true,
      env: "staging",
      page: 1,
      limit: 2,
    });
    console.log(notification);
    setNotifs(notification);
  }
  fetchNotifs(props.add);
  // setTimeout(()=>{
  //   fetchNotifs(props.add);
  // }, 5000)
  return (
    <div className='Notifcontain'>{
      notifs.length && notifs.map((notif)=>{
        console.log(notif.message);
        return(
          <>
            <NotifUI
              message = {notif.message}
            />
          </>
        )
      })
    }</div>
  )
}

export default Notif