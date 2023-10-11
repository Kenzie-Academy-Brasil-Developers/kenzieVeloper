import format from "pg-format";
import { client } from "../database";
import { Projects, ProjectsCreate, ProjectsResult, ProjectsUpdate } from "../interfaces/projects.interface";

export const createProjectService = async (data: ProjectsCreate): Promise<Projects> => {
    const queryFormat: string = format(
    'INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;',
    Object.keys(data),
    Object.values(data)
    )
    const queryResult:  ProjectsResult = await client.query(queryFormat)
    return queryResult.rows[0]
}
export const readDeveloperProjectsService = async (id: string): Promise<Projects> => {
    const query: string = `
    SELECT
    "p". "id" AS "projectsId",
    "p". "name" AS "projectName",
    "p". "description" AS "projectDescription",
    "p". "repository" AS "projectRepository",
    "p". "startDate" AS "projectStartDate",
    "p". "endDate" AS "projectEndDate
    "d". "name" AS "projectDeveloperName"
    FROM "projects" AS "p"
    LEFT JOIN "developers" AS "d"
    ON "p"."developerId" = "d"."id"
    WHERE "p"."id" = $1;
    `
    const queryResult: ProjectsResult = await client.query(query, [id])

    return queryResult.rows[0]
}

export const updateProjectService = async (id: string, data: ProjectsUpdate): Promise<Projects> => {
    const queryFormat: string = format(
        'UPDATE "projects" SET (%I) = ROW (%L) WHERE "id" = $1 RETURNING *;',
        Object.keys(data),
        Object.values(data)
    )
    const queryResult: ProjectsResult = await client.query(queryFormat, [id])
    return queryResult.rows[0]
}

//1:05:20



