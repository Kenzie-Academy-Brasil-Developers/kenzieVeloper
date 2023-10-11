import { Router } from "express";
import { createProjectsController, readProjectsByIDController, updateProjectsController } from "../controllers/projects.controllers";
import { verifyprojectsId } from "../middlewares/verifyProjectId.middleware";



export const projectsRouter: Router = Router()

projectsRouter.post('/', verifyprojectsId,  createProjectsController)

projectsRouter.get('/:id', readProjectsByIDController)

projectsRouter.patch('/:id' , updateProjectsController)

