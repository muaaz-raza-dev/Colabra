import { Button } from "@/shadcn/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/components/ui/form";
import { Input } from "@/shadcn/components/ui/input";
import {
  availableFeaturesStatuses,
  featureStatuses,
  InewProjectForm,
} from "@/types/InewProject";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";

import { useFormContext } from "react-hook-form";
import clsx from "clsx";
import NewProjectFeatureList from "./new-project-feature-list";
import toast from "react-hot-toast";

export default function NewProjectFeatureSelect() {
  const [state, setstate] = useState<{
    name: string;
    status:featureStatuses;
  }>({ name: "", status: "completed" });
  const form = useFormContext<InewProjectForm>();
  
  function handleAddFeature() {
    if (state.name && state.status) {
      const isExist = form.getValues("payload.features").find((e)=>e.status==state.status&&e.name==state.name);
      if(isExist){
        toast.error("Feature already added");
        setstate({ name: "", status: "completed" });
        return;
      }
      form.setValue("payload.features",[...form.getValues("payload.features"),state]);
      setstate({ name: "", status: "completed" });
    }
  }

  return (
    <FormField
      control={form.control}
      name="payload.features"
      rules={{ required: "At least add 1 feature " }}
      render={({field}) => (
        <FormItem className="w-full ">
          <FormLabel className="font-semibold">Features *</FormLabel>
          <FormControl>
            <div className="flex justify-between w-full gap-2">
            <Input
            className="w-[60%] bg-white border"
              value={state.name}
              placeholder="AI integration in chat box"
              onChange={({ target: { value } }) =>
              {

                setstate((e) => ({ ...e, name: value }))
              }
            }
            />
            <StatusSelector value={state.status} setvalue={setstate} />
            <Button type="button" onClick={handleAddFeature}>Add</Button>
            </div>
        </FormControl>
        <div className="w-full">
        <NewProjectFeatureList data={field.value}/>
        </div>
          <FormDescription>
            Highlight the features of your project
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function StatusSelector({
  value,
  setvalue,
}: {
  value: string;
  setvalue: React.Dispatch<
    React.SetStateAction<{
      name: string;
      status:featureStatuses;
    }>
  >;
}) {
  return (
    <Select
      value={value}
      onValueChange={(status:featureStatuses) =>setvalue((e) => ({ ...e, status }))}
    >
      <SelectTrigger className=" w-[30%] bg-white ">
      <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(availableFeaturesStatuses).map((status) => {
          return (
            <SelectItem key={status} value={status}>
                <div className="flex gap-2 items-center">
              <div
                className={clsx(
                    "w-3 h-3 rounded-full",
                    availableFeaturesStatuses[status as featureStatuses]
                )}
                ></div>
              {status}
                </div>
            </SelectItem>
          );
        })}

      </SelectContent>
    </Select>
  );
}
