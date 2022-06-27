function solve(input) {

    let index = 2;
    let dniQdene = Number(input[0]);
    let vsichkaHrana = Number(input[1]);
    let kucheHrana = 0;
    let kotkaHrana = 0;
    let biskviti = 0;
    let izqdenaHrana = 0;
    let posledenDenKuche = "";
    let posledenDenKotka = "";

    for (let dni = 1; dni <= dniQdene; dni++) {
        posledenDenKuche = Number(input[index]);
        izqdenaHrana = Number(input[index]);
        if (izqdenaHrana) {
            kucheHrana += izqdenaHrana;
            index++;
        }
        posledenDenKotka = Number(input[index]);
        izqdenaHrana = Number(input[index]);
        if (izqdenaHrana) {
            kotkaHrana += izqdenaHrana;
            index++;
        }
        if (dni % 3 === 0) {
            biskviti = Math.abs((posledenDenKotka + posledenDenKuche) * 0.1);
        }
    }
    let obshto = kucheHrana + kotkaHrana;
    let obshtoPercent = (obshto / vsichkaHrana * 100).toFixed(2);
    let kuche = (kucheHrana / obshtoPercent * 10).toFixed(2);
    let kotka = (kotkaHrana / obshtoPercent * 10).toFixed(2);
    console.log(`Total eaten biscuits: ${biskviti}gr.`);
    console.log(`${obshtoPercent}% of the food has been eaten.`);
    console.log(`${kuche}% eaten from the dog.`);
    console.log(`${kotka}% eaten from the cat.`);
}

solve(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"])