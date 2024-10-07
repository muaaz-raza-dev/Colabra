import React from 'react'
import { Button } from "@/shadcn/components/ui/button"
import { InewProjectForm } from "@/types/InewProject"
import { useFormContext } from "react-hook-form"
import { FaArrowRight } from "react-icons/fa"
import NewProjectInspirationsSelect from './inspiration-links/new-project-inspirations-select'
import NewProjectLinkSelect from './inspiration-links/new-project-link-select'



export default function NewProjectInspirationLinkStep({label}:{label:string}) {
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
      }
    
    
    return (
    <section className="flex flex-col gap-6 w-full  justify-center px-4">
    <NewProjectInspirationsSelect/>
    <NewProjectLinkSelect/>
     <div className="border-t py-4 flex justify-end">
        <Button className="w-max font-semibold gap-2" type="button" onClick={handleNext}>
          Next <FaArrowRight />
        </Button>
        </div>
     </section>
  )
}
