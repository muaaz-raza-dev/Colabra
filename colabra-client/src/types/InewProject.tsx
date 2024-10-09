import { ReactNode } from "react";
import { FaCheck, FaImages, FaRocket, FaTimesCircle, FaUsers } from "react-icons/fa";

export interface InewProjectForm {
    form_state: {
        active_count: number;
        steps_info: { label: string; description?: string; icon?:ReactNode }[]
    }
    payload: InewProject;
}

export interface InewProject {
    name: string;
    project_link:string;
    tags:string[];
    headline:string;
    description:string;
    collaborators:{userid:string,user_details:{name:string;email:string;picture:string},role:string;description:string}[]
    // timeline:{}
    links: { label: string, link: string }[];
    images: {urls:string[];files:File[]};

}



const defaultNewProject: InewProject = {
    name: '',
    headline:"",
    description:"",
    links:[],
    collaborators:[],
    project_link:"",
    tags:[],
    images: {urls:[],files:[]},
};

export const defaultNewProjectForm: InewProjectForm = {
    form_state: {
        active_count: 0,
        steps_info: [
        { label: "Main Info", description: "In this step, share all the basic details about the project", icon:<FaRocket className="text-orange-500"/>}, 
        { label: "Images and media", description: "Project links ,resources & any online inspirations .",icon:<FaImages className="text-blue-500"/> },
        { label: "Collaborators", description: "Add any visual media and links related to the project", icon:<FaUsers className="text-violet-600" />},
        {label: "Timeline / Status",description: "Define the unique features ,and technologies you use in development",icon:<FaTimesCircle className="text-teal-800"/>},
        { label: "Review & Submit", description:"review & publish your project",icon:<FaCheck className="text-green-700"/>}
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
  

 