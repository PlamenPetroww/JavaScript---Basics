function asd(input) {

    let broiDogrami = Number(input[0]);
    let vidDograma = input[1];
    let poluchavane = input[2];
    let edinichnaCena = 0;
    let total= 0;
    let cenaNaDostavka = 60;
    

    switch (vidDograma) {
        case "90X130":
            edinichnaCena = 110;
            if (broiDogrami >= 30 && broiDogrami < 60) {
                edinichnaCena = edinichnaCena - (edinichnaCena * 0.05);
                total = edinichnaCena * broiDogrami;
            } else if (broiDogrami >= 60) {
                edinichnaCena = edinichnaCena - (edinichnaCena * 0.08);
                total = edinichnaCena * broiDogrami;
            }
            break;
        case "100X150":
            edinichnaCena = 140;
            if (broiDogrami >= 40 && broiDogrami < 80) {
                edinichnaCena = edinichnaCena - (edinichnaCena * 0.06);
                total = edinichnaCena * broiDogrami;
            } else if (broiDogrami >= 80) {
                edinichnaCena = edinichnaCena - (edinichnaCena * 0.1);
                total = edinichnaCena * broiDogrami;
            }
            break;
        case "130X180":
            edinichnaCena = 190;
            if (broiDogrami >= 20 && broiDogrami < 50) {
                edinichnaCena -= edinichnaCena * 0.07;
                total = edinichnaCena * broiDogrami;
            } else if (broiDogrami >= 50) {
                edinichnaCena -= edinichnaCena * 0.12;
                total = edinichnaCena * broiDogrami;
            }
            break;
        case "200X300":
            edinichnaCena = 250;
            if (broiDogrami >= 25) {
                edinichnaCena -= edinichnaCena * 0.09;
                total = edinichnaCena * broiDogrami;
            } else if (broiDogrami >= 50) {
                edinichnaCena -= 0.14;
                total = edinichnaCena * broiDogrami;
            }
            break;
    }
    if(broiDogrami > 99 && poluchavane === "Without delivery") {
        total -= total * 0.04;
    } else if (broiDogrami > 99 && poluchavane === "With delivery") {
        total += cenaNaDostavka;
        total = total - (total * 0.04);
    } else if (broiDogrami < 10) {
        console.log(`Invalid order`);
    }
    console.log(`${total.toFixed(2)} BGN`)
}

asd(["2",
"130X180",
"With delivery"])