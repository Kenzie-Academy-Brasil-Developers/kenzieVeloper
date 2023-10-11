import { Router } from "express";
import { createDeveloperController } from "../controllers/developersInfo.controller";
import { verifyClientId } from "../middlewares/verifyDevId.middleware";
import { verifyInfo } from "../middlewares/verifyInfo.middleware";
import { osInvalid } from "../middlewares/preferredOs.middleware";






export const developersInfoRouter: Router = Router()

developersInfoRouter.post('/:id/infos',verifyClientId, osInvalid , verifyInfo, createDeveloperController)

