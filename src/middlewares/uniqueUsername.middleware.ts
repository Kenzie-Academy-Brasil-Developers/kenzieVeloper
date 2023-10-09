import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developers.interfaces";
import { client } from "../database";
import appError from "../errors/App.error";

export const uniqueUsername = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name } = req.body
    if(!name) return next()
  
    const query: DeveloperResult = await client.query(
      'SELECT * FROM "developers" WHERE "name" = $1',
      [name] 
    )
  
    if(query.rowCount) {
      throw new appError('Username already exists.', 409)
    }
  
    return next()
  }