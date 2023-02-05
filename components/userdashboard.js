import React from 'react'
import PinGallery from './pingallery'
import Mainbar from './mainbar'

function UserDashboard() {
  return (
    <div className='flex flex-col ml-52'>
        <Mainbar/>
        <PinGallery/>
    </div>

  )
}

export default UserDashboard