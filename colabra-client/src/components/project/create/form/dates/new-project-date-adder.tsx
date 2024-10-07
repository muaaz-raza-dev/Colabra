import React, { useState } from 'react'
import { DatePicker, Input } from "antd";
import { useFormContext } from 'react-hook-form';
import { InewProjectForm } from '@/types/InewProject';
import { Button } from '@/shadcn/components/ui/button';
import dayjs from 'dayjs';
export default function NewProjectDateAdder() {
    const form = useFormContext<InewProjectForm>()    
    const [state, setstate] = useState({label:"",date:dayjs()})
    function Add(){
        if (state.label&&state.date) {
            form.setValue("payload.dates", [...form.getValues("payload.dates"), state])
            setstate({label:"",date:dayjs()})
        }
    }
  return (
    <section>

    <div className="flex w-full justify-between gap-2">
      <Input placeholder='Title of the date i.e Start Date' value={state.label} onChange={({target:{value}})=>{setstate(e=>({...e,label:value}))}} />
      <DatePicker  format="dddd D-MMMM-YYYY" className="w-full sm:w-1/2 p-2 border rounded-md" placeholder="Select date" value={state.date} 
      onChange={(value)=>{setstate(e=>({...e,date:value}))}}/>
      <Button type='button' onClick={Add}>Add</Button>
        </div>
        <p className='text-xs pt-2 text-gray-400 '>Break your project into highlights/timeline</p>
      </section>
  )
}
