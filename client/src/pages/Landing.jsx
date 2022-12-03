import React from 'react'
import * as PushApi from '@pushprotocol/restapi';
import './Landing.css';

const fetchNotifs = async() => {
  const notifications = await PushApi.user.getFeeds({
      user: 'eip155:42:0xD8634C39BBFd4033c0d3289C4515275102423681', // user address in CAIP
      env: 'staging'
  });

  console.log('Notifications: \n\n', notifications);
}

const Landing = () => {
  // fetchNotifs();
  return (
    <div className='landingcontain'>Landing</div>
  )
}

export default Landing