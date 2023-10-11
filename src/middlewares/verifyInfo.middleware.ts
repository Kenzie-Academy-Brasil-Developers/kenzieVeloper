import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import appError from "../errors/App.error";
import { DevelopersInfoResult } from "../interfaces/developersInfo.interface";

export const verifyInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const developerId  = req.params.id 
    const query: DevelopersInfoResult = await client.query(
      'SELECT * FROM "developerInfos" WHERE "developerId" = $1;',
      [developerId] 
    )
  
    if(query.rowCount) {
      throw new appError('Invalid OS option.', 409)

    }
  
    return next()
  }