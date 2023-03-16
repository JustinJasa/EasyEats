import React from 'react'
import UserDashboard from '@/components/userdashboard'
import {useSession, getSession} from 'next-auth/react'


function Main({session}) {
  return (
    <div>
        <UserDashboard session={session}/>
    </div>
  )
}

//protect route
export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  console.log(req)
  console.log(session)

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

export default Main