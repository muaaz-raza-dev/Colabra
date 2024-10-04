import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/components/ui/form"
import { Select } from "antd";
import { InewProjectForm } from "@/types/InewProject";
import { useFormContext } from "react-hook-form";
import NewProjectFeatureSelect from "./new-project-feature-select";
import NewProjectFeatureSubmit from "./new-project-feature-next";


export default function NewProjectFeaturesTechStep({label}:{label:string}) {
  const form = useFormContext<InewProjectForm>()
    return (
      <section className="flex flex-col gap-6 w-full  justify-center px-4">
      <FormField
         control={form.control}
         name="payload.tech"
         rules={{required:"At least add 1 technology/stack"}}
         render={({ field }) => (
           <FormItem className="w-full ">
             <FormLabel className="font-semibold">Technology / Stack *</FormLabel>
             <FormControl>
      <Select
      mode="tags"
      allowClear
      style={{ width: '100%' }}
      placeholder="React js"
      {...field}
    />
           </FormControl>
             <FormDescription>
               Select the technology/stack used in the project
             </FormDescription>
             <FormMessage />
           </FormItem>
         
       )}
       />
  <NewProjectFeatureSelect/>
  <NewProjectFeatureSubmit label={label}/>

</section>
    );
}
