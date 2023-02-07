import React from 'react'
import PinGallery from './pingallery'
import Mainbar from './mainbar'
import MobileMenu from './mobilemenu'
import { useMediaQuery } from '@/hooks/hooks'

function UserDashboard() {
    let isMobile = useMediaQuery(640)

  return (
    <div className='flex flex-col md:ml-52'>
        <Mainbar/>
        {isMobile && <MobileMenu/>}
        <PinGallery/>
    </div>

  )
}

export default UserDashboard