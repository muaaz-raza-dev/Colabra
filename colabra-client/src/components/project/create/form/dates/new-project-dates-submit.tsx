import { Button } from '@/shadcn/components/ui/button'
import React from 'react'
import NewProjectSubmit from '../new-project-submit';
import { FaGlobe } from 'react-icons/fa';

export default function NewProjectTimelineSubmit({isLoading}:{isLoading:boolean}) {
  return (
    <section className="flex justify-end border-t-2 py-2" id='project-submit'>
    <NewProjectSubmit isLoading={isLoading}>
    <Button type='button' className='gap-2 font-bold hover:bg-accent hover:scale-95 transition-all'>
      Publish <FaGlobe/>
    </Button>
  </NewProjectSubmit>
    </section>
  )
}
