import { NextFunction, Request, Response } from "express";
import { DevelopersInfoResult } from "../interfaces/developersInfo.interface";
import { client } from "../database";
import appError from "../errors/App.error";

export const osInvalid = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.log('oi')
    const { preferredOS } = req.body
    if(preferredOS != "Windows" ||  "Linux" ||  "MacOS" ){
        throw new appError('Invalid OS option.', 400)
    }
    return next()
}