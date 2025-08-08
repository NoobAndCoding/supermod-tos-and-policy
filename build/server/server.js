import express from "express";
import { createRequestHandler } from "@react-router/node";
import * as build from "./build/server/index.js";

const app = express();

app.use(express.static("build/client"));

app.all("*", createRequestHandler({ build }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Running on port ${port}`);
});
