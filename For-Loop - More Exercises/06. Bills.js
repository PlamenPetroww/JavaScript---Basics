function bils(input) {

    let index = 0;
    let mesec = Number(input[index]);
        index++;
    let voda = 0;
    let internet = 0;
    let smektaZaTok = 0;

    for (let i = 1; i <= mesec; i++) {
        
        voda = mesec * 20;
        internet = mesec * 15;
        let tok = Number(input[index]);
        index++;
        smektaZaTok = Math.abs(smektaZaTok + tok);
    }
    let drugi = Math.abs(smektaZaTok + voda + internet + (smektaZaTok + voda + internet) * 0.2);
    let sredno = (drugi + smektaZaTok + voda + internet) / mesec;
    console.log(`Electricity: ${smektaZaTok.toFixed(2)} lv`);
    console.log(`Water: ${voda.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${drugi.toFixed(2)} lv`);
    console.log(`Average: ${sredno.toFixed(2)} lv`);
}

bils(["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"])