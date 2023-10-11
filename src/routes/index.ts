import { Router } from "express";
import { developerRouter } from "./developer.router";
import { developersInfoRouter } from "./developersInfo.router";
import { projectsRouter } from "./projects.router";


export const routes:Router = Router()

routes.use('/developers', developerRouter, developersInfoRouter)
routes.use('/projects', projectsRouter)