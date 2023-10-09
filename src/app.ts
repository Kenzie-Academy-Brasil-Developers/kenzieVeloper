import express, { Application } from "express";
import "dotenv/config";
import { handleError } from "./middlewares/handleError.middleware";
// import { developerRouter } from "./routes/developer.router";
import { routes } from "./routes";

const app: Application = express();
app.use(express.json())

// app.use("/developers",  developerRouter)
app.use("/", routes)
app.use(handleError)

export default app;
