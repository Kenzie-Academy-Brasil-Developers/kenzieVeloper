import { Request, Response } from "express"
import { DevelopersInfo, DevelopersInfoCreate } from "../interfaces/developersInfo.interface"
import { createDevelopersInfoService } from "../services/developersInfo.services"

export const createDeveloperController = async (req: Request, res: Response): Promise<Response>  => {
    const data: DevelopersInfoCreate = {
        ...req.body,
        developerId: req.params.id
    }
    const developersInfo = await createDevelopersInfoService(req.body, req.params.id)
    
    return res.status(201).json(developersInfo)
}