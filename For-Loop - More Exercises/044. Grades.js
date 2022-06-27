function grades(input) {

    let index = 0;
    let studentsNumber = Number(input[index]);
    index++;
    let otclichen = 0;
    let dobar = 0;
    let sreden = 0;
    let slab = 0;
    let srednaOcenka = 0;

    for(let i = 1; i <= studentsNumber; i++) {
        let ocenka=Number(input[index]);
    index++;
    srednaOcenka += ocenka;
    if (ocenka >= 5.00) {
        otclichen++;
    } else if (ocenka >= 4.00 && ocenka <= 4.99) {
        dobar++;
    } else if (ocenka >= 3 && ocenka <= 3.99) {
        sreden++;
    } else {
        slab++;
        
    }
    }
    let topStudent = otclichen / studentsNumber * 100;
    let dobarStudent = dobar / studentsNumber *100;
    let sredenStuden = sreden / studentsNumber * 100;
    let slabStudent = slab / studentsNumber * 100;
    srednaOcenka /= studentsNumber;
    console.log(`Top students: ${topStudent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${dobarStudent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${sredenStuden.toFixed(2)}%`);
    console.log(`Fail: ${slabStudent.toFixed(2)}%`)
    console.log(`Average: ${srednaOcenka.toFixed(2)}`);
}

grades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"])