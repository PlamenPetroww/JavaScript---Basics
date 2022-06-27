function eggBattle(input) {

    let index = 0;
    let firstPlayer = Number(input[index]);
    index++;
    let secondPlayer = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let isPlayerOut = false;

    while (command !== "End of battle") {

        if (command === "one") {
            secondPlayer--;
        } else {
            firstPlayer--;
        }

        if (firstPlayer === 0) {
            isPlayerOut = true;
            console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`)
            break;
        } else if (secondPlayer === 0) {
            isPlayerOut = true;
            console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`)
            break;
        }

        command = input[index];
        index++;
    }

    if (!isPlayerOut) {
        console.log(`Player one has ${firstPlayer} eggs left.`);
        console.log(`Player two has ${secondPlayer} eggs left.`)
    } 

}

eggBattle([5, 4, "one", "two", "one", "two", "two", "End of battle"])
