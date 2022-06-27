function tenis(input) {

    let index = 0;
    let tournament = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let win = 0;

    for (let i = 0; i < tournament; i++) {
        let tournament = input[index];
        index++;

        switch (tournament) {
            case "W":
                tempPoints += 2000;
                win++;
                break;
            case "F": tempPoints += 1200; break;
            case "SF": tempPoints += 720; break;

        }

    }

    let totalPoints = tempPoints + startPoints;
    let avvPoints = Math.floor(tempPoints / tournament);
    let winPercent = win / tournament * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avvPoints}`);
    console.log(`${winPercent.toFixed(2)}%`);
}

tenis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])