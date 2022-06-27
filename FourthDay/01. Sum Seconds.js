function sum(input){
    const timeFirst = Number(input[0]);
    const timeSecond = Number(input[1]);
    const timeThird = Number(input[2]);
    const totalTime = timeFirst + timeSecond + timeThird;

    let minutes = 0;
    let seconds = 0;

    if (totalTime >= 120) {
        minutes = 2;
        seconds = totalTime - 120;
    } else if (totalTime >= 60) {
        minutes = 1;
        seconds = totalTime - 60;
    } else {
        seconds = totalTime;
    }

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

sum(["35","45","44"])