import { QueryResult } from "pg"

export type OS = 'Windows' | 'Linux' | 'MacOS'

export type DevelopersInfo = {
id: number
developerSince: Date
preferredOs: OS
developerId: number
}
//MUDEI O Os pra OS
export type DevelopersInfoCreate = Omit<DevelopersInfo, "id"> 
export type DevelopersInfoUpdate = Partial<DevelopersInfo>
export type DevelopersInfoResult = QueryResult<DevelopersInfo>