"use client";
import { defaultNewProjectForm, InewProjectForm } from "@/types/InewProject";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ProjectFormStepLine from "./project-form-step-line";
import { Form } from "@/shadcn/components/ui/form";
import MultistepFormRenderer from "./form/multistep-form-renderer";
import useCreateProject from "@/hooks/project/useCreateProject";


export default function NewProjectForm() {
  const form = useForm<InewProjectForm>({defaultValues: defaultNewProjectForm,shouldUnregister:false});
  const {mutateAsync:mutate,isLoading} =  useCreateProject();
  const formSubmit: SubmitHandler<InewProjectForm> = async(data) => {
      await mutate(data.payload)
      form.reset()
  };
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formSubmit)}
          className="flex  w-full"
        >
          <ProjectFormStepLine />
          <div className="py-6 w-[70%]"><MultistepFormRenderer isLoading={isLoading}/></div>
        </form>
      </Form>
    </FormProvider>
  );
}
