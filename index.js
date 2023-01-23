import { checkMasterCertificate } from "./iot/certManager.js";
import { initDevice } from "./iot/index.js";
import mongooseConnection from "./src/services/db/index.js";
import api from "./src/api/index.js";

import express from "express";
import mongoose from "mongoose";

await mongooseConnection();

mongoose.set("debug", true);

const app = express();

// downloading remote cert to connect
await checkMasterCertificate();

// connect to mqtt queue
await initDevice();

app.use(api);

app.listen(9000, () => {
  console.log("Server listening on port 9000");
});
