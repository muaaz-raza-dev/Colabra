import {Dayjs } from "dayjs"
export interface InewProjectForm {
    form_state: {
        active_count: number;
        steps_info: { label: string; description?: string;completed:boolean }[]
    }
    payload: InewProject;
}

export interface InewProject {
    name: string;
    status: "pending" | "completed" | "abandoned" | "planned";
    dates: { label:string; date:Dayjs ; }[];
    category: string; 
    tech:string[];
    features: Ifeature[];
    problemSolution: string;
    Inspirations: string[];
    links: { label: string, link: string }[];
    images: {urls:string[];files:File[]};
}

export interface Ifeature{
    name: string;
    status: featureStatuses;
}
export type featureStatuses = "in progress" | "completed" | "upcoming"
export const availableFeaturesStatuses:{[key in featureStatuses]:string} = {
  "in progress": "bg-yellow-500",  // yellow indicates something is actively being worked on
  "completed": "bg-green-500",     // green represents completion or success
  "upcoming": "bg-blue-500"        // blue can represent something in the future or planned
};

const defaultNewProject: InewProject = {
    name: '',
    status: 'planned',
    dates: [],
    category:"",
    tech:[],
    features: [],
    problemSolution: '',
    Inspirations: [],
    links: [],
    images: {urls:[],files:[]},
};

export const defaultNewProjectForm: InewProjectForm = {
    form_state: {
        active_count: 0,
        steps_info: [
        { label: "Overview", description: "In this step, share all the basic details about the project",completed:false}, 
        { label: "Project links & resources", description: "Project links ,resources & any online inspirations .",completed:false },
        { label: "Media", description: "Add any visual media and links related to the project",completed:false },
        {label: "Features & Technologies",description: "Define the unique features ,and technologies you use in development",completed:false},
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
      description: "The project is live, but ongoing maintenance or upevents are being performed." 
    }
  ];
  

