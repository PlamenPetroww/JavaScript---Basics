function bileti(input) {

    let cenaBagajNaddvaisetKg = Number(input[0]);
    let kilogramiNaBagaja = Number(input[1]);
    let dniDoPatuvaneto = Number(input[2]);
    let broiBagaji = Number(input[3]);

    let bagajDeset = cenaBagajNaddvaisetKg * 0.2;
    let mejduDesetIDvaisetKilograma = cenaBagajNaddvaisetKg * 0.5;
    let cena = 0;
    let total = 0;

    if(dniDoPatuvaneto > 30 && kilogramiNaBagaja > 20) {
        cena = cenaBagajNaddvaisetKg + (cenaBagajNaddvaisetKg * 0.1);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto >= 7 && dniDoPatuvaneto <= 30 && kilogramiNaBagaja > 20) {
        cena = cenaBagajNaddvaisetKg + (cenaBagajNaddvaisetKg * 0.15);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto < 7 && kilogramiNaBagaja > 20) {
        cena = cenaBagajNaddvaisetKg + (cenaBagajNaddvaisetKg * 0.4);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto > 30 && kilogramiNaBagaja >= 10 && kilogramiNaBagaja <= 20) {
        cena = mejduDesetIDvaisetKilograma + (mejduDesetIDvaisetKilograma * 0.1);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto >= 7 && dniDoPatuvaneto && dniDoPatuvaneto <= 30 && kilogramiNaBagaja >= 10 && kilogramiNaBagaja <= 20) {
        cena = mejduDesetIDvaisetKilograma + (mejduDesetIDvaisetKilograma * 0.15);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto < 7 && kilogramiNaBagaja >= 10 && kilogramiNaBagaja <= 20) {
        cena = mejduDesetIDvaisetKilograma + (mejduDesetIDvaisetKilograma * 0.4);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto > 30 && kilogramiNaBagaja < 10) {
        cena = bagajDeset + (bagajDeset * 0.1);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto >= 7 && dniDoPatuvaneto <= 30 && kilogramiNaBagaja < 10) {
        cena = bagajDeset + (bagajDeset * 0.15);
        total = cena * broiBagaji;
    } else if (dniDoPatuvaneto < 7 && kilogramiNaBagaja < 10) {
        cena = bagajDeset + (bagajDeset * 0.4);
        total = cena * broiBagaji;
    }
    console.log(`The total price of bags is: ${total.toFixed(2)} lv. `)
}

bileti(["63.8",
    "23",
    "3",
    "1"])