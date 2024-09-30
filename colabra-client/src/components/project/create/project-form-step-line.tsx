import { InewProjectForm } from "@/types/InewProject";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function ProjectFormStepLine() {
    const {watch} = useFormContext<InewProjectForm>()
    const {active_count,steps_info} = watch("form_state")
  return (
    <div className="bg-secondary h-full p-6  w-[30vw] ">
      <h2 className="text-2xl font-semibold mb-4">Initialize new project</h2>
      <ol className="relative space-y-6 my-6">
      
        {
        steps_info.map(({label,description,completed}, index) => (
        <li key={index+label} className="flex items-start">
            {
            completed ?  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center relative">
            <CheckIcon className="w-5 h-5 text-white" />
            </div> :
          <div className={clsx("flex-shrink-0 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-medium relative before:content-[''] before:absolute before:top-[-24px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-px  before:bg-gray-500",active_count==index&&"bg-gray-600 font-semibold text-gray-200")}>
            {index+1}
          </div>
            }
          <div className="">
          <div className="ml-3 text-gray-700 font-semibold leading-tight">
            {label}
          </div>
          {
              description&&
              <div className="ml-3 text-sm leading-tight text-muted-foreground font-medium">
            {description}
          </div>
        }
        </div>
        </li>
            ))
  
        }
        
      </ol>
    </div>
  );
}
