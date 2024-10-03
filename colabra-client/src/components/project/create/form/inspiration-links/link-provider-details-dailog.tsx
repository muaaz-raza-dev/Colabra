import React, { ReactNode, useState } from "react";
import { Button } from "@/shadcn/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { useFormContext } from "react-hook-form";
import { InewProjectForm } from "@/types/InewProject";
import useValidateLink from "@/hooks/utils/useValidateLink";
import { useDebouncedCallback } from "use-debounce";
import RequestLoader from "@/components/loader/request-loading";

export default function LinkProviderDetailsDailog({
  children,
  label,
  isMutable,
  link,
}: {
  children: ReactNode;
  label?: string;
  link?: string;
  isMutable?: boolean;
}) {
  const [state, setState] = useState({ label: label || "", link: link || "" });
  const [isvalid, setisvalid] = useState(true);
  const [open, setopen] = useState(false);
  const { mutate, isLoading } = useValidateLink(setisvalid);
  const debounce = useDebouncedCallback((value: string) => {
    const regValid = !!value.match(/^https?:\/\/[^\s]+$/);
    if (regValid) mutate(value);
    else setisvalid(false);
  }, 800);

  const form = useFormContext<InewProjectForm>();
  const handleSubmit = async () => {
    if (state.label && state.link && isvalid) {
      form.setValue(
        "payload.links",
        form.getValues("payload.links").concat(state)
      );
      setState({ label: label || "", link: link || "" });
      setopen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => setopen(open)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Link</DialogTitle>
          <DialogDescription>
            Add title and valid link for your users
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 ">
          <div className=" gap-4">
            <Label htmlFor="label" className="text-right font-semibold pb-1">
              Title
            </Label>
            <Input
              id="label"
              value={state.label}
              className="border"
              onChange={({ target: { value } }) =>
                isMutable && setState((e) => ({ ...e, label: value }))
              }
            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="link" className="text-right font-semibold pb-1">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={link}
              className="border"
              value={state.link}
              onChange={({ target: { value } }) => {
                debounce(value);
                setState((e) => ({ ...e, link: value }));
              }}
            />
          </div>

          {state.link && !isLoading ? (
            isvalid ? (
              <p className="text-green-600 text-xs">This link is valid.</p>
            ) : (
              <p className="text-red-600 text-xs">This link is invalid.</p>
            )
          ) : (
            <RequestLoader size="18" stroke="2" />
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
