import React, { ReactNode, useMemo } from 'react'
import NewProjectFormOverviewStep from './new-project-form-overview-step'
import { useFormContext } from 'react-hook-form'
import { InewProjectForm } from '@/types/InewProject'
import NewProjectProblemSolutionStep from './new-project-problem-solution-step'
export default function MultistepFormRenderer() {
    const {watch} =useFormContext<InewProjectForm>()
    const stepedForm: { [key: string]: ReactNode } = useMemo(() => ({
        "0": <NewProjectFormOverviewStep label="Overview" />,
        "1":<NewProjectProblemSolutionStep label='Inspirations & links'/>,
    }), []);
  return (stepedForm[watch("form_state.active_count")])
}
