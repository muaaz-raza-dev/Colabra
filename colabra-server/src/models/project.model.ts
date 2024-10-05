import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: [ "pending" ,"completed" ,"abandoned" ,"planned"],
        default: 'Not Started'
    },
    dates:{type:[{label:String,date:Date}]},
    category:{ref:"Category",type:mongoose.SchemaTypes.ObjectId},
    tech:[String], //techs/ stacks
    features:[{name:String,status:{type:String,enum:[ "in progress" , "completed" , "upcoming"]}}],
    problemSolution:String,
    Inspirations:[String],
    links: [{ label: String, link: String }],
    images:[String]

}, { timestamps: true });

export interface IProject {
    name: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    status: 'Not Started' | 'In Progress' | 'Completed';
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export const Project = mongoose.model<IProject>('Project', projectSchema);
