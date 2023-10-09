import { Request, Response, query } from "express";
import { Developer, DeveloperCreate, DeveloperResult, DeveloperUpdate } from "../interfaces/developers.interfaces";
import format from "pg-format";
import { client } from "../database";

export const createDeveloperService = async (data: DeveloperCreate): Promise<Developer> => {
    const queryFormat: string = format(
    'INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;',
    Object.keys(data),
    Object.values(data)
    )
    const queryResult:  DeveloperResult = await client.query(queryFormat)
    return queryResult.rows[0]
}
export const readDeveloperByIdService = async (id: string): Promise<Developer> => {
    const query: string = `
    SELECT
    "d". "id" AS "developerId",
    "d". "name" AS "developerName",
    "d". "email" AS "developerEmail",
    "di". "developerSince" AS "developerinfoDeveloperSince",
    "di". "preferredOs" AS "developerInfoPreferredOS",
    FROM "developers" AS "d"
    LEFT JOIN "developerInfos" AS "di"
    ON "di"."developerId" = "d"."id"
    WHERE "d"."id" = $1;
    `
    const queryResult: DeveloperResult = await client.query(query, [id])

    return queryResult.rows[0]
}

export const updateDeveloperService = async (id: string, data: DeveloperUpdate): Promise<Developer> => {
    const queryFormat: string = format(
        'UPDATE "developers" SET ($i) = ROW ($L) WHERE "id" = $1 RETURNING *;',
        Object.keys(data),
        Object.values(data)
    )
    const queryResult: DeveloperResult = await client.query(queryFormat, [id])
    return queryResult.rows[0]
}

export const deleteDeveloperService = async (id: string): Promise<void> => {
    await client.query('DELETE FROM "developers" WHERE "id" = $1;', [id])
}


