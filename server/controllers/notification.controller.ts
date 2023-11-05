import NotificationModel from "../models/notification.Model";
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";


export const getNotifications = CatchAsyncError(async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const notifications = await NotificationModel.find().sort({createdAt:-1});
        res.status(201).json({
            success:true,
            notifications,
        })

    } catch (error:any) {
        return next(new ErrorHandler(error.message, 500));
    }
})