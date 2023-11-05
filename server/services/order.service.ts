import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middlewares/catchAsyncErrors";
import OrderModel from "../models/order.Model";


export const newOrder = CatchAsyncError(async(data:any, next:NextFunction, res:Response) =>{
    const order = await OrderModel.create(data);
    
    res.status(201).json({
        success:true,
        order,
    })
})