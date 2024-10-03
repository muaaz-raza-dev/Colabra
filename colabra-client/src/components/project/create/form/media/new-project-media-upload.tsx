import RequestLoader from '@/components/loader/request-loading'
import UploadImageCloudinary from '@/lib/upload-cloudinary'
import { Button } from '@/shadcn/components/ui/button'
import { InewProjectForm } from '@/types/InewProject'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'
import { FaArrowRight } from 'react-icons/fa'

export default function NewProjectMediaUpload({label}:{label:string}) {
  const {watch,setValue,getValues} = useFormContext<InewProjectForm>();
  const [isLoading,setIsLoading] = useState(false)
  const images = watch("payload.images");
  function SuccessCb(){
    setValue("form_state.active_count",getValues("form_state.active_count")+1)
    setValue("form_state.steps_info",getValues("form_state.steps_info").map(e=>{
      if(e.label==label){
        return {...e,completed:true}
      }
      return e
    }))
  }
  const HandleMediaUpload = async()=>{
    if(images.files.length){
      setIsLoading(true)
      try {
        const urls = await UploadImageCloudinary(images.files)
        if(urls) {
          setValue("payload.images.urls",urls)
          setValue("payload.images.files",[])
          SuccessCb()
        }
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        catch(_) {
          toast.error("Error while uploading images")
      }
      finally{
        setIsLoading(false)
      }
    }
    else {
      SuccessCb()
    }
  }

  return (
    <section className="flex justify-end border-t-2 py-2">
    <Button onClick={HandleMediaUpload} disabled={isLoading} className='gap-2'>
      {isLoading?<RequestLoader/>:
      <>
      <p>Next</p>
      <FaArrowRight />
      </>
      }
  </Button>
    </section>
  )
}
