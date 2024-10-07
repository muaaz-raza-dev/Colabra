import { Request, Response } from "express"
import { Project } from "../../models/project.model"
import { ErrorResponse, SuccessResponse } from "../../utils/responsehandler";

export async function CreateProject (req:Request,res:Response){
    try {
        const {payload} = req.body
        const images = payload.images.urls;
        payload.images = images;
        const project = await Project.create(payload)
        return SuccessResponse(res,{message:"Project created successfully",payload:project})
    } 
    catch (error) {
        return ErrorResponse(res,{error,message:"Internal server error"})
    }
}