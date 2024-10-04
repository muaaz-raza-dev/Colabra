import React, { ReactNode, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { InewProjectForm } from '@/types/InewProject'
import NewProjectInspirationLinkStep from './new-project-inspiration-links-step'
import NewProjectMediaStep from './media/new-project-media-step'
import NewProjectFormOverviewStep from './overview/new-project-form-overview-step'
import NewProjectFeaturesTechStep from './features-tech/new-project-features-tech-step'
import NewProjectReviewDatesStep from './dates-review/new-project-review-dates-step'
export default function MultistepFormRenderer() {
    const {watch} =useFormContext<InewProjectForm>()
    const stepedForm: { [key: string]: ReactNode } = useMemo(() => ({
        "0":<NewProjectReviewDatesStep />,
        "1":<NewProjectInspirationLinkStep label='Project links & resources'/>,
        "2":<NewProjectMediaStep label="Media" />,
        "3":<NewProjectFeaturesTechStep label='Features & Technologies'/>,
        "4":<NewProjectFormOverviewStep label="Overview" />,
    }), []);
  return (stepedForm[watch("form_state.active_count")])
}
