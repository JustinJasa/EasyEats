import Link from 'next/link'
import { FaGoogle, FaRegEnvelope, FaKey } from 'react-icons/fa'
import loginImg from '../public/loginImg.jpg'

export default function Login() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-green-600 flex flex-col justify-center">
                <div className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-2">Log In</h2>
                    <div className="flex justify-center mb-2">
                        <div className="bg-gray-100 flex items-center w-64 p-2">
                            <FaRegEnvelope className="mr-2" />
                            <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-gray-100 flex items-center w-64 p-2">
                            <FaKey className="mr-2" />
                            <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none flex-1" />
                        </div>
                    </div>
                    <button className="border-2 bg-green-600 rounded-full font-semibold text-white px-12 py-2 my-2">
                        Log In
                    </button>

                    <p>Or log in with Google</p>
                    <div className="flex justify-center my-2">
                        <a className="border-2 border-gray-200 rounded-full p-3 mx-1">
                            <FaGoogle className="text-sm" />
                        </a>
                    </div>

                    <p>Don't have an account? <Link href="#" className="font-semibold text-green-600">Sign Up!</Link></p>
                </div>
            </div>

            <div className="hidden sm:block">
                <img
                    className="w-full h-full object-cover"
                    alt="Picture of various dishes"
                    src="https://picsum.photos/800/800"
                 />
            </div>
        </div>
    )
}