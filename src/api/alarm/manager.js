import alarm from "./model.js";
import _ from "lodash";

export const checkIfAlarmStart = async (lastTempAnalyze) => {
    const tempToStartAlarm = 20;
    const checkIfAlreadyExistOneAlarm = await alarm.find({creatorMessage: "Davide Mazzeo"}).sort({startAlarm: -1});
    const lastAlarm = checkIfAlreadyExistOneAlarm[0];
    if(lastTempAnalyze.value >= tempToStartAlarm && (lastAlarm?.alarmIsOn === false || _.isEmpty(lastAlarm))){
        await alarm.create({alarmIsOn: true, startAlarm: lastTempAnalyze.timestamp})
        console.log(`New alarm start! the temperature reached ${lastTempAnalyze.value}`);
    }
    else if(lastTempAnalyze.value >= tempToStartAlarm && lastAlarm?.alarmIsOn === true){
        console.log(`Alarm is running! the temperature is: ${lastTempAnalyze.value}`);
    }
    else if(lastTempAnalyze.value < tempToStartAlarm && lastAlarm?.alarmIsOn === true){
        lastAlarm.set({endAlarm: lastTempAnalyze.timestamp, alarmIsOn: false});
        await lastAlarm.save();
        console.log("Stop previous alarm!");
    }
    else if(lastTempAnalyze.value < tempToStartAlarm && lastAlarm?.alarmIsOn === false){
        console.log(`No alarm now! the temperature reached ${lastTempAnalyze.value}`);
    }
}
