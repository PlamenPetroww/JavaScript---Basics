function solve(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let printirai = "";

    for (let index = start; index <= end; index++) {
        let tekushtoChislo = "" + index;
        let nechetni = 0;
        let chetni = 0;
        for (let j = 0; j <= tekushtoChislo.length; j++) {
            let currDigit = Number(tekushtoChislo.charAt(j));
            if (j % 2 === 0) {
                chetni += currDigit;
            } else {
                nechetni += currDigit;
            }
        }
        if (nechetni === chetni) {
            printirai += `${index} `
        }
    }
    console.log(printirai)
}

solve(["100011", "100050"])