import React from 'react'
import PinGallery from './pingallery'
import Mainbar from './mainbar'
import MobileMenu from './mobilemenu'
import { useMediaQuery } from '@/hooks/hooks'
import { useSession } from "next-auth/react";


function UserDashboard() {
  let isMobile = useMediaQuery(640)

  const { data: session} = useSession()  

  console.log(session)

  return (
    <div className='flex flex-col md:ml-52'>
        <Mainbar session={session}/>
        {isMobile && <MobileMenu/>}
        <PinGallery/>
    </div>

  )
}

export default UserDashboard