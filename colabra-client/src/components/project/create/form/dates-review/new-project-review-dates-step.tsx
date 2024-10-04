import React from 'react'
import { Calendar } from "@/shadcn/components/ui/calendar";
import { Label } from '@/shadcn/components/ui/label';
import { useFormContext } from 'react-hook-form';
import { InewProjectForm } from '@/types/InewProject';

export default function NewProjectReviewDatesStep() {
    const form = useFormContext<InewProjectForm>()
    const [date, setDate] = React.useState(new Date())
  return (
    <section className="flex flex-col gap-6 w-full  justify-center px-4">
<Label className='font-semibold'>
Project Initiation Date   
</Label>
<Calendar
mode="single"
selected={form.watch("payload.dates.start_date")}
onSelect={(s)=>s&&form.setValue("payload.dates.start_date",s)}
className="bg-seconadary rounded-md"
/>
</section>
  )
}
