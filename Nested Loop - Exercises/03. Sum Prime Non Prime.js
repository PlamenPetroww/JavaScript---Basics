function solve(input) {

    let index = 0;
    let prostoChislo = 0;
    let slojnoChislo = 0;

    while (input[index] !== "stop") {
        let segashnoChislo = Number(input[index]);
        if (segashnoChislo < 0) {
            console.log(`Number is negative.`);
        } else {
            let eProsto = true;
            for (let i = 2; i < segashnoChislo; i++) {
                if (segashnoChislo % i === 0) {
                    eProsto = false;
                    break;
                }
            }
            if (eProsto) {
                prostoChislo += segashnoChislo;
            } else {
                slojnoChislo += segashnoChislo;
            }
        }
        index++;
    }
    console.log(`Sum of all prime numbers is: ${prostoChislo}`);
    console.log(`Sum of all non prime numbers is: ${slojnoChislo}`);
}

solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"])