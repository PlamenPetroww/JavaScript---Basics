function cat(input) {
    let days = Number(input[0]);
    let restMins = days * 127;
    let workDays = 365 - days;
    let workMins = workDays * 63;
    let totalMins = restMins + workMins;
    if (totalMins < 30000) {
        console.log('Tom sleeps well');
        let remaining = 30000 - totalMins
        let mins = remaining % 60;
        let hours = remaining / 60
        console.log(`${hours.toFixed(0)} hours and ${mins.toFixed(0)} minutes less for play`);
    } else {
        console.log('Tom will run away');
        let lacking = totalMins - 30000
        let H = lacking / 60;
        let M = lacking % 60
        console.log(`${Math.floor(H, 0)} hours and ${M.toFixed(0)} minutes more for play`);
    }
}

cat(["113"])