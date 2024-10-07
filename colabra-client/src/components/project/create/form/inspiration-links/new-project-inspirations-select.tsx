import RequestLoader from "@/components/loader/request-loading";
import { Button } from "@/shadcn/components/ui/button";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/components/ui/form";
import { Input } from "@/shadcn/components/ui/input";
import { InewProjectForm } from "@/types/InewProject";
import { useDebouncedCallback } from "use-debounce";
import { ArrowUpRightSquare, XIcon } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import useValidateLink from "@/hooks/utils/useValidateLink";

export default function NewProjectInspirationsSelect() {
  const form = useFormContext<InewProjectForm>();
  const [input, setinput] = useState("");
  const [isValid, setisValid] = useState(false);
  const { mutate, isLoading } = useValidateLink(setisValid);
  const debounced = useDebouncedCallback((value) => {
    setisValid(true)
    const regValid = !!value.match(/^https?:\/\/[^\s]+$/);
    if (regValid) mutate(value);
    else setisValid(false)
  }, 500);

  const handleAdd = () => {
    if (input&&isValid) {
      setinput("");
      form.setValue(
        "payload.Inspirations",
        Array.from(new Set([...form.getValues("payload.Inspirations"), input]))
      );
    }
  };

  const handleDelete = (link: string) => {
    setinput("");
    form.setValue(
      "payload.Inspirations",
      form.getValues("payload.Inspirations").filter((li) => li != link)
    );
  };

  const handleLinkChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debounced(value);
    setinput(value);
    if (!value) {
      setisValid(false);
      return;
    }
  };

  return (
    <FormField
      control={form.control}
      name="payload.Inspirations"
      render={({ field }) => (
        <FormItem className="w-full ">
          <FormLabel className="font-semibold">Inspirational Platforms/Companies</FormLabel>
          <div className="flex gap-2 items-center">
            <Input
              placeholder="https://google.com"
              className="border w-1/2"
              value={input}
              onChange={handleLinkChange}
            />
            {isLoading && <RequestLoader size="18" stroke="2" />}
            <Button type="button" onClick={handleAdd}>Add</Button>
          </div>
          {!isLoading&& input && 
          (

            !isValid ? 
            <p className="text-red-600 text-xs"> Please enter a valid link. </p> 
            :
            <p className="text-green-600 text-xs"> This link is valid. </p> 
          )

        }

          <div className="flex gap-2 ">
            {field.value.map((ins) => {
              return (
                <div
                  className=" p-4 relative rounded-md h-24   bg-secondary flex items-center gap-2 flex-col justify-center"
                  key={ins}
                >
                  <button
                    type="button"
                    onClick={() => handleDelete(ins)}
                    className="absolute  bg-secondary-foreground text-white p-0.5 rounded-full shadow-md font-bold -top-0.5 -right-0.5"
                  >
                    <XIcon size={14} />
                  </button>
                  <img
                    src={`${ins}/favicon.ico`}
                    className="w-8 aspect-square "
                    alt="logo"
                  />
                  <p className="  rounded-md p-1 text-xs border-primary font-semibold    px-2 flex gap-1 items-center ">
                    <a href={`${ins}/favicon.ico`} target="_blank">
                      {ins}
                    </a>
                    <ArrowUpRightSquare size={14} />
                  </p>
                </div>
              );
            })}
          </div>
          <FormDescription>
            Provide links of the online inspirations/platforms (if any).
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
