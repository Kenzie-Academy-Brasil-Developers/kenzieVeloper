import { NextFunction, Request, Response } from "express";
import { DevelopersInfoResult } from "../interfaces/developersInfo.interface";
import { client } from "../database";
import appError from "../errors/App.error";

export const osInvalid = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { preferredOS } = req.body
    if(preferredOS !== "Windows" && preferredOS !== "Linux" && preferredOS !== "MacOS" ){
        throw new appError('Invalid OS option.', 400)
    }
    return next()
}