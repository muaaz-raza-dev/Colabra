import { Request, Response } from "express";
import { Category } from "../../models/category.model";
import { ErrorResponse, SuccessResponse } from "../../utils/responsehandler";

export default async function SearchCategories(req:Request,res:Response) {
const {q} = req.body;
try {
    const categories = await Category.find({name: { $regex: new RegExp(q, 'i') }}).limit(20);
    return SuccessResponse(res,{payload:categories});
}
catch(err){
    return SuccessResponse(res,{payload:[]});
}

}
