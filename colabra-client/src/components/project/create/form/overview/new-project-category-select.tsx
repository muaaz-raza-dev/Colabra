import React from 'react'
import {FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,} from "@/shadcn/components/ui/form"
import {  useFormContext } from 'react-hook-form'
import { Select, Spin } from 'antd';
import { InewProjectForm } from '@/types/InewProject';
import { useDebouncedCallback } from 'use-debounce';
import useSearchCategory from '@/hooks/category/useSearchCategory';
import { useRecoilValue } from 'recoil';
import { searchedCategoryAtom } from '@/state/category.atom';
export default function NewProjectCategorySelect() {
    const {mutate:search, isLoading} = useSearchCategory()
    const categories = useRecoilValue(searchedCategoryAtom)
  const debounced  = useDebouncedCallback(
    (value:string)=>{
        search(value)
  },800)
  const form = useFormContext<InewProjectForm>();
  return (
    <FormField
    control={form.control}
    name="payload.category"
    rules={{required:"Category is required"}}
    render={({ field }) => (
      <FormItem className="w-full ">
        <FormLabel className="font-semibold">Select category *</FormLabel>
        <FormControl>
        <Select
      className='w-1/2 block'
      placeholder="Select a category"
      filterOption={false}  
      value={field.value}
      showSearch
      onSearch={(value:string)=>debounced(value)}
      onSelect={field.onChange}
      loading={isLoading}
      notFoundContent={isLoading ? <Spin size="small" /> : null}
      options={categories.map(e=>({label:e.name,value:e._id}))}
    />
        </FormControl>
        <FormDescription>
          Select the categories that best describe your project.
        </FormDescription>
        <FormMessage />
      </FormItem>
    
  )}
  />
  )
}
