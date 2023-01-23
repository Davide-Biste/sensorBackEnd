import axios from "axios";
import model from "./model.js";
import datalog from "./model.js";
import {checkIfAlarmStart} from "../alarm/manager.js";

export const everyMessagePOST = async (msg) => {
  await checkIfAlarmStart(msg);
  return model.create(msg);
};
