import CustomSelect from "@/components/global/custom-select"
import { Button } from "@/shadcn/components/ui/button"
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/shadcn/components/ui/form"
import { Input } from "@/shadcn/components/ui/input"
import { InewProjectForm, project_statuses } from "@/types/InewProject"
import React from 'react'
import { useFormContext } from "react-hook-form"
import toast from "react-hot-toast"
import { FaArrowRight } from "react-icons/fa"
// import Select from 'react-select';

export default function NewProjectFormOverviewStep({label}:{label:string}) {
    const  form  = useFormContext<InewProjectForm>()

    async function handleNext(){
      const title = await form.trigger("payload.title")
      const status =await form.trigger("payload.status")

      if(title&&status){
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

    }

  return (
    <section className="flex flex-col gap-6 w-full  justify-center px-4">
       <FormField
          control={form.control}
          name="payload.title"
          rules={{required:"Title is required",minLength:{value:2,message:"minimun 2 character is required"}}}
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel className="font-semibold">Title *</FormLabel>
              <FormControl>
                <Input placeholder="Give your project a good name" className="border w-1/2" {...field} />
              </FormControl>
              <FormDescription>
                This is the public title of your project .
              </FormDescription>
              <FormMessage />
            </FormItem>
          
        )}
        />
         <FormField
          control={form.control}
          name="payload.status"
          rules={{required:"Status is required",}}
          render={({ field }) => (
            <FormItem className="w-full  ">
              <FormLabel className="font-semibold">Project Status *</FormLabel>
              <FormControl>
                <CustomSelect className="w-1/2" data={project_statuses.map(e=>({label:e.label,value:e.value}))} {...field} />
              </FormControl>
              <FormDescription>
                {project_statuses.find(e=>e.value== field.value)?.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          
        )}
        />
           {/* <FormField
          control={form.control}
          name="payload.category"
          rules={{required:"Category is required"}}
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel className="font-semibold">Select categories *</FormLabel>
              <FormControl>
              <Select
              className="!w-1/2 text-base "
              hideSelectedOptions  
              options={[{label:"asdfasdf",value:"asdasfd"}]} 
              placeholder="select category"
              isLoading={true} menuPosition="absolute" value={field.value} onChange={field.onChange}
              isMulti  />
              </FormControl>
              <FormDescription>
                Select the categories that best describe your project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          
        )}
        /> */}
    <FormField
       control={form.control}
       name="payload.problemSolution"
       render={({ field }) => (
         <FormItem className="w-full ">
           <FormLabel className="font-semibold">What inspired you to start this project? </FormLabel>
           <FormControl>
             <Input placeholder="I want to connect the people of the whole world (facebook)" className="border w-1/2 font-semibold" {...field} />
           </FormControl>
           {field.value&& <i>&quot;<b className="py-2 text-sm text-black">{field.value}</b> &quot;</i>}
           <FormDescription>
             This question helps identify the reason or inspiration behind starting the project.
           </FormDescription>
           <FormMessage />
         </FormItem>
       
     )}
     />
        <div className="border-t py-4 flex justify-end">
        <Button className="w-max font-semibold gap-2" type="button" onClick={handleNext}>
          Next <FaArrowRight />
        </Button>
        </div>
    </section>
  )
}
