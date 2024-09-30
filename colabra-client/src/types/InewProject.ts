export interface InewProjectForm {
    form_state: {
        active_count: number;
        steps_info: { label: string; description?: string;completed:boolean }[]
    }
    payload: InewProject
}

export interface InewProject {
    title: string;
    status: "pending" | "completed" | "abandoned" | "planned";
    dates: { start_date: string; end_date: string; };
    category: string;
    description: string;
    tags: string[];
    features: string[];
    problemSolution: string;
    Inspirations: string[];
    defaultCredentials: { [key: string]: string };
    links: { provider: string, link: string }[];
    Images: { format: "slider" | "singleton", images: string[] }
    timeline: IprojectTimeline[];
}

export interface IprojectTimeline {
    milestone: string;
    start_date: string;
    end_date: string;
    status: "pending" | "completed"
}



const defaultNewProject: InewProject = {
    title: '',
    status: 'planned',
    dates: { start_date: '', end_date: '' },
    category: '',
    description: '',
    tags: [],
    features: [],
    problemSolution: '',
    Inspirations: [],
    defaultCredentials: {},
    links: [],
    Images: { format: 'singleton', images: [] },
    timeline: []
};

export const defaultNewProjectForm: InewProjectForm = {
    form_state: {
        active_count: 0,
        steps_info: [
        { label: "Overview", description: "In this step, share all the basic details about the project",completed:false}, 
        { label: "Problem and Solution", description: "The problem being solved and any inspirations or solutions",completed:false },
        { label: "Media and links", description: "Add any visual media and links related to the project",completed:false },
        { label: "Features and Tags", description: "List features and relevant tags",completed:false },
        {label: "Timeline",description: "Define the milestones, deadlines, and their status",completed:false},
        { label: "Default Credentials", description: "Add default credentials for demo access, if applicable." ,completed:false},
        { label: "Review & Submit",completed:false ,description:"review & publish your project"}
        ]
    },
    payload: defaultNewProject
};