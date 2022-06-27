function hospital(input) {


    let index = 0;
    const period = Number(input[index]);
    index++;


    let doctors = 7;
    let untreatedPatients = 0;
    let treatedPatients = 0;
    let dayCounter = 0;

    for(let i = 0; i <= period; i++) {
        let pacientsCount = Number(input[index]);
        index++;
        dayCounter++;
    }

    if(dayCounter === 3 && untreatedPatients > doctors) {
        doctors += 1;
        dayCounter = 0;
    }

    if (pacientsCount <= doctors) {
        treatedPatients+=pacientsCount;
    } else if (untreatedPatients > doctors) {
        treatedPatients+=doctors;
        untreatedPatients += (pacientsCount-doctors)
    }

}


hospital(["4", "7", "27", "9", "1"])