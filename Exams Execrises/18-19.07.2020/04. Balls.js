function balls(input) {

    let index = 0;
    let broqtNaTopkite = Number(input[index]);
    index++;
    let bqla = 0;
    let chervena = 0;
    let oranjeva = 0;
    let julta = 0;
    let cherna = 0;
    let total = 0;
    let drugi = 0;

    for(let i = 1; i <= broqtNaTopkite; i++) {
        let topka = input[index];
        index++;
        if(topka === "white") {
            bqla++;
            total += 20; 
        } else if(topka === "black") {
            cherna++;
            total /= 2; 
        } else if (topka === "red") {
            chervena++;
            total +=5;
        } else if (topka === "yellow") {
            julta++;
            total += 15;
        } else if (topka === "orange") {
            oranjeva++;
            total += 10;
        } else {
            drugi++;
            continue;
        }
    }
    console.log(`Total points: ${Math.floor(total)}`);
    console.log(`Red balls: ${chervena}`);
    console.log(`Orange balls: ${oranjeva}`);
    console.log(`Yellow balls: ${julta}`);
    console.log(`White balls: ${bqla}`);
    console.log(`Other colors picked: ${drugi}`);
    console.log(`Divides from black balls: ${cherna}`);
}

balls(["10",
"white",
"white",
"e",
"red",
"orange", "red", "black","black","black","black"])