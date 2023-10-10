import 'express-async-errors'
import express, { Application } from "express";
import "dotenv/config";
import { handleError } from "./middlewares/handleError.middleware";
import { routes } from "./routes";

const app: Application = express();
app.use(express.json())


app.use("/", routes)
app.use(handleError)

export default app;
