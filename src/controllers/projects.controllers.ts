import { Request, Response } from "express";
import { createProjectService, readDeveloperProjectsService, updateProjectService } from "../services/projects.services";
import { Projects } from "../interfaces/projects.interface";

export const createProjectsController = async (req: Request, res: Response): Promise<Response>  => {
    const projects: Projects = await createProjectService(req.body)
    
    return res.status(201).json(projects)
}

export const readProjectsByIDController = async (req: Request, res: Response): Promise<Response>  => {
    const projects: Projects = await readDeveloperProjectsService(req.params.id)
    
    return res.status(200).json(projects)
}

export const updateProjectsController = async (req: Request, res: Response): Promise<Response>  => {
    const projects: Projects = await updateProjectService(req.params.id, req.body)
    
    return res.status(200).json(projects)
}





