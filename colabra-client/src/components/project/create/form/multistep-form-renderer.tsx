import React, { ReactNode, useMemo } from 'react'
import NewProjectFormOverviewStep from './new-project-form-overview-step'
import { useFormContext } from 'react-hook-form'
import { InewProjectForm } from '@/types/InewProject'
import NewProjectInspirationLinkStep from './new-project-inspiration-links-step'
import NewProjectMediaStep from './media/new-project-media-step'
export default function MultistepFormRenderer() {
    const {watch} =useFormContext<InewProjectForm>()
    const stepedForm: { [key: string]: ReactNode } = useMemo(() => ({
        "0":<NewProjectMediaStep />,
        "1":<NewProjectInspirationLinkStep label='Project links & resources'/>,
        "2": <NewProjectFormOverviewStep label="Overview" />
    }), []);
  return (stepedForm[watch("form_state.active_count")])
}
