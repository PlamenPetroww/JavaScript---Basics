function piramida(input) {

    let targetNum = Number(input[0]);
    let porednoChislo = 0;
    let isEqual = false;

    for (let redove = 1; redove <= targetNum; redove++) {
        let printLine = "";
        for (let koloni = 1; koloni <= redove; koloni++) {
            porednoChislo++;
            printLine += porednoChislo + " ";
            if (porednoChislo === targetNum) {
                isEqual = true;
                break;
            }
        }
        console.log(printLine)
        if (isEqual) {
            break;
        }
    }
}

piramida(["7"])