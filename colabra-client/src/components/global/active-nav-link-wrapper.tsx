import React, { ReactNode } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/shadcn/components/ui/tooltip"
  
export default function ActiveNavLinkWrapper({children,notification,tooltip}:{children:ReactNode,notification?:boolean;tooltip:string}) {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
    <button className='relative aspect-square h-8 hover:bg-border transition-colors border-secondary-foreground border rounded-md p-1 px-2'>
    { notification&& <span className='absolute left-0 top-0 -ml-1 -mt-1 w-3 h-3 rounded-full bg-accent'></span>}
    {children}
    </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}
