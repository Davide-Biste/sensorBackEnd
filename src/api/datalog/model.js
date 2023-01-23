import mongoose from "mongoose";

const datalogSchema = new mongoose.Schema({
  creatorMessage: {
    type: String,
    default: "Davide Mazzeo",
  },
  timestamp: {
    type: Number,
    required: true,
  },
  hum: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  free_ram: {
    type: Number,
    required: true,
  },
  total_ram: {
    type: Number,
    required: true,
  },
  sensorCode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("datalog", datalogSchema);
