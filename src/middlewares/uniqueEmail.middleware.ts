import { NextFunction, Request, Response } from "express";
import { DeveloperResult } from "../interfaces/developers.interfaces";
import { client } from "../database";
import appError from "../errors/App.error";

export const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.body
    if(!email) return next()
  
    const query: DeveloperResult = await client.query(
      'SELECT * FROM "developers" WHERE "email" = $1;',
      [email] 
    )
    console.log(query)
  
    if(query.rowCount) {
      throw new appError('Email already exists.', 409)
      console.log('entrei')
    }
  
    return next()
  }