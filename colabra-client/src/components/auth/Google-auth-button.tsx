"use client"
import LoginWithGoogle from '@/api/auth/login-google.api'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React from 'react'
import toast from 'react-hot-toast'

export default function GoogleAuthButton() {
  async function onSuccess(res:CredentialResponse){
    console.log(res) // Your response data
    if(res.credential){
      await LoginWithGoogle(res.credential)
      toast.success("Logged in successfully")
    }
  }

  function onError(){
    toast.error("An error occured try again later")
  }
  return (
    <GoogleLogin onSuccess={onSuccess} onError={onError} />
  )
}
