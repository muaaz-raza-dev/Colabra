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
    category: string[];
    description: string;
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
    category:[],
    description: '',
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
        { label: "Inspirations & links", description: "The problem being solved and any inspirations or solutions",completed:false },
        { label: "Media and links", description: "Add any visual media and links related to the project",completed:false },
        {label: "Timeline",description: "Define the milestones, deadlines, and their status",completed:false},
        { label: "Default Credentials", description: "Add default credentials for demo access, if applicable." ,completed:false},
        { label: "Review & Submit",completed:false ,description:"review & publish your project"}
        ]
    },
    payload: defaultNewProject
};

export const project_statuses = [
    { 
      value: "pending", 
      label: "Pending", 
      description: "The project is currently under development." 
    },
    { 
      value: "completed", 
      label: "Completed", 
      description: "The project is live and fully completed." 
    },
    { 
      value: "abandoned", 
      label: "Abandoned", 
      description: "The project has been stopped and is no longer being worked on." 
    },
    { 
      value: "planned", 
      label: "Planned", 
      description: "The project is planned, but no development or work has started yet." 
    },
    { 
      value: "on_hold", 
      label: "On Hold", 
      description: "The project is temporarily paused but may resume in the future." 
    },
    { 
      value: "in_review", 
      label: "In Review", 
      description: "The project is finished but currently under review or testing." 
    },
    { 
      value: "cancelled", 
      label: "Cancelled", 
      description: "The project has been permanently discontinued and will not continue." 
    },
    { 
      value: "maintenance", 
      label: "Maintenance", 
      description: "The project is live, but ongoing maintenance or updates are being performed." 
    }
  ];
  
  