import LoginCard from '@/components/logincard'
import loginImg from '../../public/loginImg.jpg'

export default function Login() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="bg-green-600 flex flex-col justify-center">
                <LoginCard />
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