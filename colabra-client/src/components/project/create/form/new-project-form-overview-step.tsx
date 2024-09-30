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

export default function NewProjectFormOverviewStep() {
    const  form  = useFormContext<InewProjectForm>()
  return (
    <div>
       <FormField
          control={form.control}
          name="payload.title"
          shouldUnregister
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Username</FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>
                This is the public title of your project .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    </div>
  )
}
