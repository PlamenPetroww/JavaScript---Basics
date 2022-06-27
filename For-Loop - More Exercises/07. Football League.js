function footbalStadion(input) {

    let index = 0;
    let kapacitet = Number(input[index]);
    index++;
    let vsichkiFenove = Number(input[index]);
    index++;

    let aSektor = 0;
    let bSektor = 0;
    let vSektor = 0;
    let gSektor = 0;

    for (let i = 2; i <= kapacitet; i++) {
        let sektor = input[index];
        index++;

        if (sektor === "A") {
            aSektor++;
        } else if (sektor === "B") {
            bSektor++;
        } else if (sektor === "V") {
            vSektor++;
        } else if (sektor === "G") {
            gSektor++;
        }
    }
    	let vsichki = aSektor + bSektor + vSektor + gSektor;
        if (vsichki <= kapacitet) {
        let aSektorPercent = aSektor / vsichkiFenove * 100;
        let bSektorPercent = bSektor / vsichkiFenove * 100;
        let vSektorPercent = vSektor / vsichkiFenove * 100;
        let gSektorPercent = gSektor / vsichkiFenove * 100;
        let fenovePercent = (aSektor + bSektor + vSektor + gSektor) / kapacitet * 100;
        console.log(`${aSektorPercent.toFixed(2)}%`);
        console.log(`${bSektorPercent.toFixed(2)}%`);
        console.log(`${vSektorPercent.toFixed(2)}%`);
        console.log(`${gSektorPercent.toFixed(2)}%`);
        console.log(`${fenovePercent.toFixed(2)}%`);
    } else {

    }
}

/*footbalStadion(["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"])*/
/*footbalStadion(["93",
    "16",
    "A",
    "V",
    "G",
    "G",
    "B",
    "B",
    "G",
    "B",
    "A",
    "B",
    "B",
    "B",
    "A",
    "B",
    "B",
    "A"])*/
footbalStadion(["1000",
    "12",
    "A",
    "A",
    "V",
    "V",
    "A",
    "G",
    "A",
    "A",
    "V",
    "G",
    "V",
    "A"
])