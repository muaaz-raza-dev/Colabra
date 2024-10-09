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
import { InewProjectForm } from "@/types/InewProject"
import React from 'react'
import { useFormContext } from "react-hook-form"
import { FaArrowRight } from "react-icons/fa"
import NewProjectCategorySelect from "./new-project-category-select"

export default function NewProjectFormOverviewStep() {
    const form = useFormContext<InewProjectForm>()

    async function handleNext(){
      const title = await form.trigger("payload.name")
      // const status =await form.trigger("payload.status")
      // const category =await form.trigger("payload.category")
      if(title){
        form.setValue("form_state.active_count",form.getValues("form_state.active_count")+1)
      }

    }

  return (
    <section className="flex flex-col gap-6 w-full  justify-center px-4">
      <div>
      <h1 className="text-2xl font-bold ">
      Tell us about this product
      </h1>
      <p>
      We’ll need its name, headline, links, topics, and description.
      </p>
      </div>
       <FormField
          control={form.control}
          name="payload.name"
          rules={{required:"Title is required",minLength:{value:2,message:"minimun 2 character is required",},
          maxLength:{value:40,message:"Keep it short as it should cover in 40 characters"}}}
          render={({ field }) => (
            <FormItem className="w-full ">
              <FormLabel className="font-semibold flex gap-2 items-center justify-between w-1/2">
                Name of the product *
            <p className="text-muted-foreground text-sm">{field.value.length}/40</p>
                </FormLabel>
              <FormControl>
                <Input maxLength={40}  placeholder="Give your project a good name" className="border w-1/2 bg-white" {...field} />
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
       rules={{maxLength:{value:60,message:"Keep it short as it should cover in 40 characters"},max:{value:40,message:"Keep it short as it should cover in 40 characters"}}}
       name="payload.headline"
       render={({ field }) => (
         <FormItem className="w-full ">
           <FormLabel className="font-semibold flex gap-2 items-center justify-between w-1/2">
            Headline
            <p className="text-muted-foreground text-sm">{field.value.length}/60</p>
           </FormLabel>
           
           <FormControl>
             <Input max={60} maxLength={60} placeholder="Concise and descriptive headline for the product" className="border w-1/2  bg-white " {...field} />
           </FormControl>
           <FormMessage />
         </FormItem>
       
     )}
     />

     

      <div className="border-t pt-2">
      <h1 className="text-2xl font-bold ">
      Links
      </h1>
      </div>
      <FormField
          control={form.control}
          name="payload.project_link"
          rules={{required:"Product link is required"}}
          render={({ field }) => (
            <FormItem className="w-full  ">
              <FormLabel className="font-semibold">Link to the Product *</FormLabel>
              <FormControl>
                <Input defaultValue={"https://"} className="border w-1/2 bg-white" {...field} />
              </FormControl>
              <FormDescription>
                This is the public link of the product
              </FormDescription>
              <FormMessage />
            </FormItem>
          
        )}
        />

     <NewProjectCategorySelect/>
        <div className="border-t py-4 flex justify-end">
        <Button className="w-max font-semibold gap-2" type="button" onClick={handleNext}>
          Next <FaArrowRight />
        </Button>
        </div>
    </section>
  )
}
