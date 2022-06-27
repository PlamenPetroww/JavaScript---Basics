function numberTo(input) {

    let index = 0;
    let groupNumber = Number(input[index]);
    index++;
    let peopleInOneGroup = Number(input[index]);
    index++;

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let i = 1; i < groupNumber; i++) {
        let people = Number(input[index]);
        index++;

        totalPeople += people;

        if (peopleInOneGroup <= 5) {
            musala+= people;
        } else if (peopleInOneGroup > 6 && peopleInOneGroup <= 25) {
            monblan+=people;
        } else if (peopleInOneGroup <= 13 && peopleInOneGroup > 25) {
            kilimandjaro+=people;
        }
    }
    console.log(musala);
    console.log(monblan);
    console.log(kilimandjaro);
}

numberTo(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])