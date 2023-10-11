import format from "pg-format"
import { DevelopersInfo, DevelopersInfoCreate, DevelopersInfoResult } from "../interfaces/developersInfo.interface"
import { client } from "../database"

export const createDevelopersInfoService = async (data: DevelopersInfoCreate, id: any  ): Promise<DevelopersInfo> => {
    
    const queryFormat: string = format(
    'INSERT INTO "developerInfos" (%I, "developerId") VALUES (%L, %s) RETURNING *;',
    Object.keys(data),
    Object.values(data),
    Number(id)
    )
    console.log(queryFormat)
    const queryResult:  DevelopersInfoResult = await client.query(queryFormat)
    return queryResult.rows[0]
}