/* eslint-disable react/no-unescaped-entities */
import RequestLoader from "@/components/loader/request-loading";
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
import React, { ReactNode,  useRef, useState } from "react";
export default function NewProjectSubmit({
  children,
  isLoading
}: {
  children: ReactNode;
  isLoading:boolean
}) {
const [open,setopen] = useState(false)
const ref = useRef<HTMLButtonElement>(null)
  return (
    <>
    <button hidden ref={ref} type="submit">
    </button>
    <Dialog  open={open} onOpenChange={(o)=>!isLoading&&setopen(o)}>
      <DialogTrigger >{children}</DialogTrigger>
      <DialogContent  >
        <DialogHeader>
          <DialogTitle>Are you ready?</DialogTitle>
          <DialogDescription className="text-gray-800 font-medium text-sm ">
            <p className="text-gray-800 font-semibold">
            Before you publish your project, please confirm that:
            </p>
            <ol className="list-disc px-2">
              <li className="">
                You've thoroughly reviewed all project details for accuracy.
              </li>
              <li>
                The content adheres to all guidelines and is suitable for public
                sharing.
              </li>
              <li>
                You're aware that some changes may not be possible after
                publication.
              </li>
            </ol>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={()=>ref.current?.click()}>
            {isLoading?  <RequestLoader size="28" stroke="3" />: 'Sure'}
            </Button>
        </DialogFooter>

    </DialogContent>
    </Dialog>
    </>
  );
}

