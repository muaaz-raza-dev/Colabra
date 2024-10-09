import { InewProjectForm } from "@/types/InewProject";
import { Tooltip } from "antd";
import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function ProjectFormStepLine() {
  const { watch,setValue } = useFormContext<InewProjectForm>();
  const { active_count, steps_info } = watch("form_state");
  function JumpFormStep(index:number){
    setValue("form_state.active_count",index)
  }
  return (
    <div className="p-6  w-[30%] ">
      <h2 className="text-2xl font-semibold mb-4">Initialize new project</h2>
      <ol className="relative space-y-2 my-6">
        {steps_info.map(({ label, description, icon }, index) => (
          <button type="button" key={index + label} className={clsx("flex p-4  items-center w-full rounded-md hover:bg-secondary transition-colors",active_count==index&&"bg-secondary")} onClick={()=>JumpFormStep(index)}>
            {icon}
            <div className="">
              <Tooltip title={description}>
              <div className="ml-3 text-gray-700 font-semibold leading-tight">
                {label}
              </div>
              </Tooltip>
            </div>
          </button>
        ))}
      </ol>
    </div>
  );
}
