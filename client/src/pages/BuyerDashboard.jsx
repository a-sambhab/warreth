import React from 'react'
import { useParams } from 'react-router-dom'
import './BuyerDashboard.css'

const BuyerDashboard = () => {
  const {add} = useParams();
  return (
    <div className='buyercontain'>
      <div className='buyerinnercontain'>
        
      </div>
    </div>
  )
}

export default BuyerDashboard;