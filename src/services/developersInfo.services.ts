import format from "pg-format"
import { DevelopersInfo, DevelopersInfoCreate, DevelopersInfoResult } from "../interfaces/developersInfo.interface"
import { client } from "../database"

export const createDevelopersInfoService = async (data: DevelopersInfoCreate, id: any  ): Promise<DevelopersInfo> => {
    
    const queryFormat: string = format(
    'INSERT INTO "developerInfos" (%I, "developerId") VALUES (%L, $1) RETURNING *;',
    Object.keys(data),
    Object.values(data)
    )
    const queryResult:  DevelopersInfoResult = await client.query(queryFormat, [id])
    return queryResult.rows[0]
}