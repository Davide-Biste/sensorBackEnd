import alarm from "./model.js";
import { Router } from "express";
const router = new Router();

router.get("/:creatorMessage", async (request, response) => {
  return response.json(
      await alarm.find({ creatorMessage: request.params.creatorMessage })
  );
});

export default router;

