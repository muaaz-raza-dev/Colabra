import React from 'react'
import { Button } from "@/shadcn/components/ui/button"

import { InewProjectForm } from "@/types/InewProject"
import { useFormContext } from "react-hook-form"
import toast from "react-hot-toast"
import { FaArrowRight } from "react-icons/fa"
import NewProjectInspirationsSelect from './problem-solution/new-project-inspirations-select'



export default function NewProjectProblemSolutionStep({label}:{label:string}) {
    const  form  = useFormContext<InewProjectForm>()
    async function handleNext(){
        form.setValue("form_state.active_count",form.getValues("form_state.active_count")+1)
        form.setValue("form_state.steps_info",
        form.getValues("form_state.steps_info").map((e)=>{
        if(e.label==label){
            return {...e,completed:true}
        }
        return e
        }))
        toast.success("you're solid")
      }
    
    
    return (
    <section className="flex flex-col gap-6 w-full  justify-center px-4">
   
    <NewProjectInspirationsSelect/>

     <div className="border-t py-4 flex justify-end">
        <Button className="w-max font-semibold gap-2" type="button" onClick={handleNext}>
          Next <FaArrowRight />
        </Button>
        </div>
     </section>
  )
}
