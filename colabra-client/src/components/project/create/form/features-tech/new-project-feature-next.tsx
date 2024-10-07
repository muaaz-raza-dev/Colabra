import { Button } from '@/shadcn/components/ui/button'
import { InewProjectForm } from '@/types/InewProject'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa'

export default function NewProjectFeatureSubmit({label}:{label:string}) {
    const form = useFormContext<InewProjectForm>()
  const JumpToNextStep = async() => {
    const feats = await form.trigger("payload.features")
      const techs =await form.trigger("payload.tech")
      if(feats&&techs){
        form.setValue("form_state.active_count",form.getValues("form_state.active_count")+1)
        form.setValue("form_state.steps_info",
        form.getValues("form_state.steps_info").map((e)=>{
        if(e.label==label){
           return {...e,completed:true} 
          }
        return e
        }))
      }

  }
  return (
    <div className='flex justify-end border-t py-2'>
         <Button type='button' onClick={JumpToNextStep}  className='gap-2'>
      <p>Next</p>
      <FaArrowRight />
  </Button>
    </div>
  )
}
