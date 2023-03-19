import {useSession, getSession} from 'next-auth/react'
import axios from 'axios'

const {data: session} = getSession()

console.log(session)

export const authAxios = axios.create({
    headers: {
        Authorization: `Bearer token`
    }
})