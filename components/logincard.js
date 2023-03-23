import React, {useState} from "react";
import Link from "next/link";
import { FaGoogle, FaRegEnvelope, FaKey } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react";
import {useFormik} from 'formik'
import { ValidateLogin } from "@/lib/validateForms";
import { useRouter } from "next/router";
import { createErrorToast } from "@/utils/toastNotification";


export default function LoginCard() {


  const router = useRouter()

  const logIn = async (values) => {

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl:"http://localhost:3000/main"
    });

    if(res.ok) router.push(res.url)
    else createErrorToast("Credentials were incorrect ❌ Try again!")

  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: ValidateLogin,
    onSubmit: logIn
  })


  //google handler 
  const handleGoogleSignIn = async () => {
    signIn('google', {
      callbackUrl:"http://localhost:3000/main"
    })
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg text-center shadow-lg shadow-gray-400">
        <h2 className="text-3xl font-bold mb-2">Log In</h2>
        {formik.errors.email && formik.touched.email ? (
          <span className="text-rose-600">{formik.errors.email}</span>
        ) : (
          <></>
        )}
        <div className="flex justify-center mb-2">
          <div className="bg-gray-100 flex items-center w-64 p-2">
            <FaRegEnvelope className="mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-100 outline-none flex-1 cursor-pointer"
              {...formik.getFieldProps("email")}
            />
          </div>
        </div>
        {formik.errors.password && formik.touched.password ? (
          <span className="text-rose-600">{formik.errors.password}</span>
        ) : (
          <></>
        )}
        <div className="flex justify-center">
          <div className="bg-gray-100 flex items-center w-64 p-2">
            <FaKey className="mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-100 outline-none flex-1"
              {...formik.getFieldProps("password")}
            />
          </div>
        </div>
        <button
          className="bg-green-600 rounded-full font-semibold text-white px-12 py-2 my-2 cursor-pointer"
          type="submit"
        >
          Log In
        </button>

        <p>Or log in with Google</p>
        <div className="flex justify-center my-2">
          <button onClick={handleGoogleSignIn} className="border-2 border-gray-200 rounded-full p-3 mx-1">
            <FaGoogle className="text-sm cursor-pointer" />
          </button>
        </div>

        <p>
          Don't have an account?{" "}
          <Link href="/signup" className="font-semibold text-green-600">
            Sign Up!
          </Link>
        </p>
      </div>
    </form>
  );
}
