import React from 'react'
export default function PrimaryButton(props:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
<button {...props}  className="px-4 py-2 rounded-md border bg-primary text-white font-semibold  text-sm hover:bg-accent-foreground transition-colors   primaryShadow" >
{props.children}  
</button>

  )
}
