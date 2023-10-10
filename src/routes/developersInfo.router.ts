import { Router } from "express";
import { createDevelopersInfoService } from "../services/developersInfo.services";






export const developersInfoRouter: Router = Router()

developersInfoRouter.post('/:id/infos', createDevelopersInfoService)

