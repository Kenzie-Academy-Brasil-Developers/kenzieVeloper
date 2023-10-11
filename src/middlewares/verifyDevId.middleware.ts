import { NextFunction, Request, Response } from "express"
import { Developer, DeveloperResult } from "../interfaces/developers.interfaces"
import { client } from "../database"
import appError from "../errors/App.error"

export const verifyClientId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params
  
    const queryResult: DeveloperResult = await client.query(
      'SELECT * FROM "developers" WHERE "id" = $1;',
      [id]
    )
  
    if(!queryResult.rowCount) {
      throw new appError('Developers not found.', 404)
    }
  
    const foundDeveloper: Developer = queryResult.rows[0]
  
    res.locals = { ...res.locals, foundDeveloper }
  
    return next()
  }