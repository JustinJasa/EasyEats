import React from 'react'
import { useSession } from "next-auth/react"
import User from '@/components/user'



function UserPage() {
const { data: session } = useSession()



  return (
    <div>
        <User session={session}/>
    </div>
  )
}

export default UserPage;