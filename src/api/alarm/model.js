import mongoose from "mongoose";

const alarmSchema = new mongoose.Schema({
  alarmIsOn: {
    type: Boolean,
    required: true,
  },
  startAlarm:{
    type: String,
  },
  endAlarm:{
    type: String,
  },
  creatorMessage:{
    type:String,
    default: "Davide Mazzeo",
  }
});

export default mongoose.model("alarm", alarmSchema);
