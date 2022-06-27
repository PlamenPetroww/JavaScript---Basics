function trekkingMania(input) {

    let index = 0;
    let groups  = Number(input[index]);
    index++
    let totalPeople = 0;

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    
    for (let i = 1; i <= groups; i++) {
        let people = Number(input[index]);
        index++
        totalPeople += people;

        if (people <= 5) {
            musala += people;
        } else if (people >= 6 && people <= 12) {
            monblan += people;
        } else if (people >= 13 && people <= 25) {
            kilimandjaro += people;
        } else if (people >= 26 && people <= 40) {
            k2 += people;
        } else {
            everest += people;
        }
    }

    let musalaPercent = (musala / totalPeople * 100).toFixed(2);
    let monbalPercent = (monblan / totalPeople * 100).toFixed(2);
    let kilimandjaroPercent = (kilimandjaro / totalPeople * 100).toFixed(2);
    let k2Percent = (k2 / totalPeople * 100).toFixed(2);
    let everestPercent = (everest / totalPeople * 100).toFixed(2);


    console.log(`${musalaPercent}%`)
    console.log(`${monbalPercent}%`)
    console.log(`${kilimandjaroPercent}%`)
    console.log(`${k2Percent}%`);
    console.log(`${everestPercent}%`);
}

trekkingMania(["10",
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