import { InewProjectForm } from '@/types/InewProject'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import dayjs from "dayjs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/shadcn/components/ui/table"
import { FaTrash } from 'react-icons/fa'
  
export default function NewProjectDatesVisual() {
    const {watch,getValues,setValue} = useFormContext<InewProjectForm>();
    const dates = watch('payload.dates');
    const today = dayjs();

    function DeleteDate (index:number){ 
        const payload = getValues("payload.dates").filter((_,i)=>i!=index)
        setValue("payload.dates", payload)
    }
 return (
    <section className='flex flex-col gap-3'>

{!dates.length ? 
<div className='font-bold text-center text-xl text-gray-600'>
    No highlights
</div> 
:
<Table className='bg-white rounded-md'>
  <TableHeader >
    <TableRow className=''>
      <TableHead className='font-semibold px-4'>Label</TableHead>
      <TableHead className='font-semibold'>Date</TableHead>
      <TableHead className='font-semibold'>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

{

    dates.map((e, i) => (
    <TableRow key={i} className='py-2'>
      <TableCell className='px-4'>{e.label}</TableCell>
      <TableCell className='font-semibold text-sm'>{e.date?.format("dddd D-MMMM-YYYY")}</TableCell>
      <TableCell className="font-semibold text-sm">
        {e.date?.isAfter(today)?
        <div className='p-1 bg-orange-400 px-2  text-xs rounded w-max'>  Expected 
        </div> : 
        <div className='p-1 px-2 bg-green-400 text-xs  rounded w-max'> Completed </div>
        }
        </TableCell>
     <TableCell className="font-semibold">
        <button onClick={()=>DeleteDate(i)} className='hover:scale-95 transition-transform'> <FaTrash size={16}/></button>
</TableCell>

    </TableRow>
))
}
  </TableBody>
  
</Table>

}
        
    </section>
  )
}
