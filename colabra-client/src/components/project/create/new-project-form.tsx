"use client";
import { defaultNewProjectForm, InewProjectForm } from "@/types/InewProject";
import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ProjectFormStepLine from "./project-form-step-line";
import { Form } from "@/shadcn/components/ui/form";
import NewProjectFormOverviewStep from "./form/new-project-form-overview-step";
const steped_form:{[key:string]:ReactNode}={
    "0":<NewProjectFormOverviewStep label="Overview"/>,
    "1":<h1>This is me</h1>
}
export default function NewProjectForm() {
  const form = useForm<InewProjectForm>({
    defaultValues: defaultNewProjectForm,
  });
  const formSubmit: SubmitHandler<InewProjectForm> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formSubmit)}
          className="flex  w-full"
        >
          <ProjectFormStepLine />
          <div className="py-6 w-[70%]">
            {steped_form[form.watch("form_state.active_count")]}
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
