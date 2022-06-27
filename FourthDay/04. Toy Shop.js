function vacation(input) {
    const trip = Number(input[0]);
    const puzzleNum = Number(input[1]);
    const barbyNum = Number(input[2]);
    const bearNum = Number(input[3]);
    const minionNum = Number(input[4]);
    const truckNum = Number(input[5]);
    const puzzle = 2.6;
    const speakBarby = 3.00;
    const teddyBear = 4.1;
    const minion = 8.2;
    const truck = 2.00;
    let toyCount = puzzleNum + barbyNum + bearNum + minionNum + truckNum;
    let totalCost = (puzzleNum * puzzle) + (speakBarby * barbyNum) + (teddyBear * bearNum) + (minion * minionNum) + (truck * truckNum);
    if  (toyCount >= 50) {
        totalCost *= 0.75;
    }

    totalCost *= 0.9;

    const razlika = Math.abs(totalCost - trip);

    if (totalCost >= trip) {
        console.log(`Yes! ${razlika.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${razlika.toFixed(2)} lv needed.`);
    }
} 

vacation(["40.8","20","25","30","50","10"])