function razhodka(input) {

    let index = 0;
    let command = input[index];
    index++;
    let cel = 10000;

    while(command !== "Going home") {
        let obshtoStupki = Number(command);
        cel -= obshtoStupki;
        if(cel <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(cel)} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
    if(command === "Going home") {
        let ostavqshtiStupki = Number(input[index]);
        index++;
        cel -= ostavqshtiStupki;
        if(cel <= 0) {
            console.log(`Goal reached! Good job!`);
            console.log(`${Math.abs(cel)} steps over the goal!`);
        }
        else {
            console.log(`${cel} more steps to reach goal.`)
        }
    }

}

razhodka(["1000",
"1500",
"2000",
"6500"])
