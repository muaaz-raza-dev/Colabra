import React from "react";
import { Label } from "@/shadcn/components/ui/label";
import NewProjectDateAdder from "./new-project-date-adder";
import NewProjectDatesVisual from "./new-project-dates-visual";
import NewProjectTimelineSubmit from "./new-project-dates-submit";
export default function NewProjectReviewDatesStep({isLoading}:{isLoading:boolean}) {
  return (
    <section className="flex flex-col gap-4 w-full  justify-center px-4">
      <div className="flex flex-col gap-2">
      <Label className="font-semibold">Build your timeline</Label>
     <NewProjectDateAdder/>
     </div>
     <NewProjectDatesVisual/>
     <NewProjectTimelineSubmit isLoading={isLoading}  />
    </section>
  );
}

