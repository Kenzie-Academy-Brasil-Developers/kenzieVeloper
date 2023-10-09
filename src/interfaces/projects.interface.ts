import { QueryResult } from "pg"

export type Projects = {
id: number
name: string
description: Text
repository: string
startDate: Date
endDate: Date
developerId: number
}
export type ProjectsCreate = Omit<Projects, "id"> 
export type ProjectsUpdate = Partial<Projects>
export type ProjectsResult = QueryResult<Projects>