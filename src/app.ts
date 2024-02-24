import express from "express";
import dotenv from "dotenv";
import Logger from "./config/logger.js";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { Request, Response } from "express";
import { schema } from "./schemas/user.js";
import { resolver } from "./resolvers/user.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const logger = new Logger("app");

app.all("/graphql", createHandler({ schema: schema, rootValue: resolver }));

// Serve the GraphiQL IDE.
app.get("/", (_req: Request, res: Response) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    logger.info(`The app is listening on port ${process.env.PORT}`);
  });
}).catch((err)=> logger.info("Mongodb error" + err));
