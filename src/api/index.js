import { Router } from "express";

import datalog from "./datalog/index.js";
import alarm from "./alarm/index.js";

const router = new Router();

router.use("/datalog", datalog);
router.use("/alarm", alarm);

export default router;
