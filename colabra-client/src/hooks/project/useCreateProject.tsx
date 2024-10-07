import CreateProjectApi from '@/api/project/create-project.api'
import { InewProject } from '@/types/InewProject'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

export default function useCreateProject() {
    const router = useRouter()
    return useMutation({
        mutationKey:'new Project',
        mutationFn:(payload:InewProject)=>CreateProjectApi(payload),
        onSuccess:()=>{
            toast.success('Project created successfully')
            router.push('/')
        },
        onError:({response:{data:{message}}})=>{
            toast.error(message||"Internal server error. Try again later...")
        }
    })
}
