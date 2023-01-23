import { Router } from "express";
import datalogs from "./model.js";
const router = new Router();

router.get("/:creatorMessage", async (request, response) => {
  return response.json(
    await datalogs.find({ creatorMessage: request.params.creatorMessage })
  );
});

router.get("/:creatorMessage/startDate/:startDate/endDate/:endDate", async (request, response) => {
  return response.json(
      await datalogs.find({ creatorMessage: request.params.creatorMessage, timestamp: {
          $gte:request.params.startDate,
          $lt: request.params.endDate
        } })
  );
});

export default router;
