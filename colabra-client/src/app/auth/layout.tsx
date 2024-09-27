import PrimaryButton from '@/components/global/primary-button'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function AuthLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <nav className='flex justify-between   p-6'>
        <div className="">
          <div className="flex items-center">
        <Image src={"/logo.svg"} quality={100} width={60} height={60} alt='Colabra'  />
        <h1 className='text-xl  tracking-tight font-black -ml-1'>Colabra</h1>
          </div>
        </div>
        <div className="flex gap-4 items-center">
            <p className='font-semibold text-xs text-muted-foreground'>Don&apos;t have an account?</p>
            <PrimaryButton>
            Sign up
            </PrimaryButton>
        </div>
      </nav>
      <GoogleOAuthProvider  clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      {children}
      </GoogleOAuthProvider>
    </div>
  )
}
