function sleepyCat(input) {
    const freeDaysInYear = Number(input[0]);
    const catSleep = 30000;
    const minutesLong = 127;
    const minutesLittle = 63;
    const playLongTime = freeDaysInYear * minutesLong;
    const year = 365 - freeDaysInYear;
    const playLittleTime = year * minutesLittle;
    const playForOneYear = playLittleTime + playLongTime;
    let mins = 0;
    let hours = 0;
    let m = 0;
    let h = 0;


    if (catSleep > playForOneYear && mins > 60) {
        console.log("Tom sleeps well");
        let remaining = catSleep - playForOneYear;
        mins = remaining % 60;
        mins -= 60;
        hours = remaining / 60;
        hours += 1;
        console.log(`${hours.toFixed(0)} hours and ${mins.toFixed(0)} minutes less for play`);
    } else if (playForOneYear > catSleep && m > 60) {
        console.log("Tom sleeps well");
        let lacking = playForOneYear - catSleep;
        h = lacking / 60;
        m = lacking % 60;
        h += 1;
        m -= 60;
        console.log(`${h.toFixed(0)} hours and ${m.toFixed(0)} minutes less for play`);
    }
}

sleepyCat(["120"])