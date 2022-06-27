function izpit(input) {

    let nezadovolitelniOcenki = Number(input[0]);
    let index = 1;
    let imeNaZadacha = input[index];
    let problemiNomer = 0;
    let obshtaOcenka = 0;
    let loshiOcenki = 0;
    let posledenProblem = "";

    while(imeNaZadacha !== "Enough") {
        posledenProblem = imeNaZadacha = input[index];
        problemiNomer++;
        index++;
        let tekushtaOcenka = Number(input[index]);
        obshtaOcenka += tekushtaOcenka;
        if(tekushtaOcenka <= 4) {
            loshiOcenki++;
        }
        if(loshiOcenki >= nezadovolitelniOcenki) {
            console.log(`You need a break, ${loshiOcenki} poor grades.`);
            break;
        }
        index++;
        imeNaZadacha = input[index];
    }
    if(imeNaZadacha === "Enough") {
        let srednaOcenka = (obshtaOcenka / problemiNomer).toFixed(2);
        console.log(`Average score: ${srednaOcenka}`);
        console.log(`Number of problems: ${problemiNomer}`);
        console.log(`Last problem: ${posledenProblem}`);
        }
}

izpit(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])