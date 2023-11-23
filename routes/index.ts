import { Request, Response, Router } from "express"
import { getAllQuotes } from "../handlers/getAllQuotes"
import { getByFilter } from "../handlers/getByFilter"
import { getRandom } from "../handlers/getRandom"

export const v1Router = Router()

v1Router.get('/check', (_req: Request, res:Response) => res.status(200).json({ message: 'API running'}))
v1Router.get('/', getAllQuotes)
v1Router.get('/random', getRandom)
v1Router.get('/:filterType/:filterValue', getByFilter)
