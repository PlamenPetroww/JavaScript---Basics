function solve(input) {

    let index = 0;
    let broiJury = Number(input[index]);
    index++;
    let command =input[index];
    index++;
    let kolkoOcenkiImame = 0;
    let srednaOcenka = 0;

    while(command !== "Finish") {
        kolkoOcenkiImame++;
        let presentationName = command;
        let tempsrednaOcenka = 0;
        for(let i = 0; i <broiJury; i++) {
            let tekushtaOcenka = Number(input[index]);
            index++;
            tempsrednaOcenka += tekushtaOcenka;
        } 
        tempsrednaOcenka = tempsrednaOcenka / broiJury;
        let presentationResult = `${presentationName} - ${tempsrednaOcenka.toFixed(2)}.`;
        console.log(presentationResult);
        srednaOcenka +=tempsrednaOcenka;
        command = input[index];
        index++;
    }
    srednaOcenka = srednaOcenka / kolkoOcenkiImame;
    console.log(`Student's final assessment is ${srednaOcenka.toFixed(2)}.`);
}

solve(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])