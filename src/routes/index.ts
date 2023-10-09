import { Router } from "express";
import { developerRouter } from "./developer.router";


export const routes:Router = Router()

routes.use('/developers', developerRouter)