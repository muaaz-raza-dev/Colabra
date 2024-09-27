"use client"
import { Input } from '@/shadcn/components/ui/input'
import React, { useState } from 'react'

export default function PasswordInput(props:React.InputHTMLAttributes<HTMLInputElement> ) {
    const[toggle,setToggle]=useState(false)
  return (
    <div className="flex w-full">
          <Input id="email" {...props} type={!toggle?"password":"text"} placeholder="Enter password" className='focus:outline-none outline-none border-none 
          placeholder:text-sm w-full'/>
          <button className=" text-xs hover:underline font-semibold pr-2 text-primary" type="button" onClick={()=>setToggle(!toggle)}>
            {toggle? 'hide' : 'show'}
            </button>
            </div>
  )
}
