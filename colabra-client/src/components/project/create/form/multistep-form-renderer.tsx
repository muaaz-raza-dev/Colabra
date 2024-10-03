import React, { ReactNode, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { InewProjectForm } from '@/types/InewProject'
import NewProjectInspirationLinkStep from './new-project-inspiration-links-step'
import NewProjectMediaStep from './media/new-project-media-step'
import NewProjectFormOverviewStep from './overview/new-project-form-overview-step'
import NewProjectFeaturesTechStep from './features-tech/new-project-features-tech-step'
export default function MultistepFormRenderer() {
    const {watch} =useFormContext<InewProjectForm>()
    const stepedForm: { [key: string]: ReactNode } = useMemo(() => ({
        "0":<NewProjectFormOverviewStep label="Overview" />,
        "1":<NewProjectInspirationLinkStep label='Project links & resources'/>,
        "2":<NewProjectMediaStep label="Media" />,
        "3":<NewProjectFeaturesTechStep/>
         
    }), []);
  return (stepedForm[watch("form_state.active_count")])
}
