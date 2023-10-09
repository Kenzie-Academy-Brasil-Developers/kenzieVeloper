import { QueryResult } from "pg"

export type Os = 'Windows' | 'Linux' | 'MacOS'

export type DevelopersInfo = {
id: number
developerSince: Date
preferredOs: Os
developerId: number
}
export type DeveloperCreate = Omit<DevelopersInfo, "id"> 
export type DeveloperUpdate = Partial<DevelopersInfo>
export type DeveloperResult = QueryResult<DevelopersInfo>