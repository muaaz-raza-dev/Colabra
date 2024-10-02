import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, XIcon } from 'lucide-react'
import {useDropzone} from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { InewProjectForm } from '@/types/InewProject'
import toast from 'react-hot-toast'

export default function NewProjectMediaStep() {
  const [samples,setSamples] =useState<string[]>([])
  const {setValue,getValues} = useFormContext<InewProjectForm>()
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    maxSize:(1024**3)*10,
    multiple:true,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', ],},
    onDrop(acceptedFiles, fileRejections) {
      if(fileRejections.length){
        toast.error(fileRejections[0].errors[0].message)
      }
        acceptedFiles.forEach(file => {
          const url =  URL.createObjectURL(file)
          setSamples(samples=>([...samples,url]))
        })
        setValue("payload.images.files",getValues("payload.images.files").concat(acceptedFiles))
      }
  })
    function DeleteImage(index:number){
      setValue("payload.images.files",getValues("payload.images.files").filter((_,i)=>i!=index))
      setSamples(samples.filter((_,i)=>i!=index))
    }
  return (
    <section className='px-4'>

    <div className="flex items-center justify-center  "
    {...getRootProps()}
    >
    <motion.div
      className="w-full max-w-md p-8 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Project images/shots</h2>
      <motion.div
        className={`border-4 border-dashed rounded-xl p-8 text-center ${''} transition-colors hover:border-accent duration-300 ease-in-out cursor-pointer`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <input {...getInputProps()} />
        <motion.div
          transition={{ duration: 0.3 }}
        >
          <Upload className="w-16 h-16 mx-auto mb-4 text-accent" />
        </motion.div>
        <div className="text-xl font-semibold text-gray-700 mb-2">
        {
          isDragActive ?
          <p>Drop the files here ...</p> :
          <p>{`Drag 'n' drop some files here, or click to select files`}</p>
        }
        </div>
        <p className="text-sm text-gray-500">or click to select a file</p>
      </motion.div>
      <p className="mt-4 text-center text-sm text-gray-500 ">
        Supported formats: JPG, PNG, JPEG (max 10MB)
      </p>
    </motion.div>
  </div>
  <div className="flex flex-wrap gap-3">
        {samples.map((sample,index) => (
          <div key={index} className="flex gap-4 mb-4 relative w-max">
            <img className="w-32 h-32 object-contain rounded-md  bg-secondary" src={sample} alt="sample"/>
            <button onClick={()=>DeleteImage(index)} className="absolute -top-2 -right-1 text-sm text-white font-bold bg-destructive rounded-full p-1 hover:scale-105 transition-transform " ><XIcon strokeWidth='5' size={14}/></button>
            </div>
            ))
          }
          </div>
</section>
  )
}
