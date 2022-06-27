function otTimeForTheExam(input) {
    const examHour = Number(input[0]);
    const examMinutes = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinutes = Number(input[3]);

    const totalExamMinutes = examHour * 60 + examMinutes;
    const totalArrivalTime = arrivalHour * 60 + arrivalMinutes;
    const differnceInTime = Math.abs(totalExamMinutes - totalArrivalTime);
    const hourDiff = Math.floor(differnceInTime / 60);
    let minDiff = differnceInTime % 60;
    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }

    if (totalArrivalTime === totalExamMinutes) {
        console.log("On time");
    } else if (totalArrivalTime > totalExamMinutes && differnceInTime < 60) {
        console.log("Late");
        console.log(`${minDiff} minutes after the start`);
    } else if (totalArrivalTime > totalExamMinutes && differnceInTime >= 60) {
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if (differnceInTime <= 30) {
        console.log("On time");
        console.log(`${minDiff} minutes before the start`);
    } else if (differnceInTime > 30 && differnceInTime < 60) {
        console.log("Early");
        console.log(`${minDiff} minutes before the start`);
    } else {
        console.log("Early");
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }
}
otTimeForTheExam(["16",
    "00",
    "15",
    "00"])