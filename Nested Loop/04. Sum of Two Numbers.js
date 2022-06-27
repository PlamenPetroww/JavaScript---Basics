function combi(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let n = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let y = start; y <= end; y++) {
        for (let x = start; x <= end; x++) {
            counter++;
            let res = x + y;
            if (res === n) {
                console.log(`Combination N:${counter} (${y} + ${x} = ${res})`);
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${n}`)
    }

}

combi(["23",
"24",
"20"])