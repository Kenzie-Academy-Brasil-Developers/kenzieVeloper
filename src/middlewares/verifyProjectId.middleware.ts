import { NextFunction, Request, Response } from "express"
import { client } from "../database"
import appError from "../errors/App.error"
import { Projects, ProjectsResult } from "../interfaces/projects.interface"

export const verifyprojectsId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { developerId } = req.body 
  
    const queryResult: ProjectsResult = await client.query(
      'SELECT * FROM "developers" WHERE "id" = $1;',
      [developerId]
    )
  
    if(!queryResult.rowCount) {
      throw new appError('Developer not found.', 404)
    }
  
    const foundProject: Projects= queryResult.rows[0]
  
    res.locals = { ...res.locals, foundProject }
  
    return next()
  }