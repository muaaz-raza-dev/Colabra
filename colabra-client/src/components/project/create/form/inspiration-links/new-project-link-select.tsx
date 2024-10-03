import { Link_Providers } from '@/data/link-provider'
import { Label } from '@/shadcn/components/ui/label'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import LinkProviderDetailsDailog from './link-provider-details-dailog'
import { useFormContext } from 'react-hook-form'
import { InewProjectForm } from '@/types/InewProject'
import { Card, CardContent } from '@/shadcn/components/ui/card'
import { ExternalLinkIcon } from 'lucide-react'
import {  FaTrash } from 'react-icons/fa'
import clsx from 'clsx'

export default function NewProjectLinkSelect() {
  return (
    <>
      <Label className='font-semibold'>Project Links & Resources</Label>
    <section className="flex gap-4">
      {
        Link_Providers.map(e=>{
          return(
            <LinkProviderDetailsDailog label={e.label} link={e.link} key={e.link} >
            <button className={clsx('rounded flex min-w-32 flex-col border-2 p-4 gap-2 hover:border-black transition-colors items-center justify-center bg-secondary shadow ')} >
              <img src={e.icon_path} alt={e.label} className='w-16 h-16'/>
              <h1 className='text-sm tracking-tight font-bold'>{e.label}</h1>
            </button>
            </LinkProviderDetailsDailog>
          )
        })
      }
       <LinkProviderDetailsDailog  isMutable>
      <button className='rounded flex flex-col border-2 min-w-32 p-4 gap-2 hover:border-black transition-colors items-center justify-center bg-secondary shadow' >
        <IoMdAdd size={44}/>
        <h1 className='text-sm tracking-tight font-bold'>Custom</h1>
        </button>
        </LinkProviderDetailsDailog>

        
    </section>
      <LinkDisplay/>
    </>
  )
}


function LinkDisplay(){
  const {watch,setValue}=useFormContext<InewProjectForm>()
  const links = watch("payload.links")
  function handleDelete(id:number){
    const updatedLinks = links.filter((e,i)=>i!==id)
    setValue("payload.links",updatedLinks)
  }
  return(
    <div className="container mx-auto p-4 space-y-2">
    <h1 className="text-2xl font-bold text-center">Your Links & Resources</h1>
    {links.length === 0 ? (
      <p className="text-center text-muted-foreground">No links to display.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) =>{
          const logo =  Link_Providers.find(e=>e.label==link.label)?.icon_path
         return (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 text-primary hover:text-primary/80 transition-colors">
                {
                  logo &&
                <img 
                src={logo}
                alt=""
                className="w-6 h-6"
                />
              }
                <div className="flex-grow min-w-0">
                  <p className="font-medium truncate">
                    {link.label}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {link.link}
                  </p>
                </div>
                <a
                href={link.link} 
                target="_blank" 
                rel="noopener noreferrer">
                <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
              </a>
              <button className='rounded-md text-sm text-red-500  hover:text-red-400 transition-colors' onClick={()=>handleDelete(index)}>
              <FaTrash size={18}/>
              </button>
              </div>
            </CardContent>
          </Card>
          )
              } 
      )}
      </div>
    )}
  </div>
  )
}