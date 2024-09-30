"use client"
import { defaultNewProjectForm, InewProjectForm } from '@/types/InewProject'
import React from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import ProjectFormStepLine from './project-form-step-line'
import { Form } from '@/shadcn/components/ui/form'
import NewProjectFormOverviewStep from './form/new-project-form-overview-step'

export default function NewProjectForm() {
    const form =  useForm<InewProjectForm>({defaultValues:defaultNewProjectForm})
    const formSubmit:SubmitHandler<InewProjectForm> = (data)=>{
        console.log(data)
    }
  return (
    <FormProvider {...form}>
        <Form {...form}>
    <form onSubmit={form.handleSubmit(formSubmit)} className='flex gap-4'>
        <ProjectFormStepLine/>
        <NewProjectFormOverviewStep/>
    </form>
        </Form>
    </FormProvider>
  )
}
