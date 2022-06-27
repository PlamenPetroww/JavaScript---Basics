function oscar(input) {

    let index = 0;
    let nameActor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let jouryCount = Number(input[index]);
    index++;

    let noOscar = false;

    for (let i = 0; i < jouryCount; i++) {
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++;
        points += Math.abs(name.length * tempPoints / 2);
        if (points > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            noOscar = true;
            break;
        }
    } if (!noOscar) {
        let diff = Math.abs(points - 1250.5)
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }
}

oscar(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])