import { Router } from "express";
import { createDeveloperController, deleteDeveloperController, readDeveloperByIDController, updateDeveloperController } from "../controllers/developer.controllers";
import { uniqueEmail } from "../middlewares/uniqueEmail.middleware";
import { uniqueUsername } from "../middlewares/uniqueUsername.middleware";
import { verifyClientId } from "../middlewares/verifyDevId.middleware";



export const developerRouter: Router = Router()

developerRouter.post('/', uniqueEmail, createDeveloperController)

developerRouter.use('/:id', verifyClientId)

developerRouter.get('/:id', readDeveloperByIDController)

developerRouter.patch('/:id' , uniqueEmail, uniqueUsername, updateDeveloperController)

developerRouter.delete('/:id', deleteDeveloperController)