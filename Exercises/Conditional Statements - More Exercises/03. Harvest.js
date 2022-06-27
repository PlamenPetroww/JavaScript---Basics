function harvest(input) {
    const loseQmeter = Number(input[0]);
    const grozdeZaEdinKvadrat = Number(input[1]);
    const nujnoKolichestvoVino = Number(input[2]);
    const rabotnici = Number(input[3]);
    const grozdeNaKwadrat = 2.5;
    const obshtoGrozdeOtLozeto = grozdeZaEdinKvadrat * loseQmeter;
    const vinoOtCqlotoLote = (obshtoGrozdeOtLozeto * 0.4) / grozdeNaKwadrat;

if (nujnoKolichestvoVino > vinoOtCqlotoLote) {
    let nedostigashto = Math.floor(nujnoKolichestvoVino - vinoOtCqlotoLote);
    console.log(`It will be a tough winter! More ${nedostigashto} liters wine needed.`);
} else if (nujnoKolichestvoVino <= vinoOtCqlotoLote) {
    let ostvaashto = Math.floor(vinoOtCqlotoLote - nujnoKolichestvoVino);
    let ragotnici = Math.floor(ostvaashto / rabotnici);
    console.log(`Good harvest this year! Total wine: ${vinoOtCqlotoLote} liters.${ostvaashto} liters left -> ${ragotnici} liters per person.`);
}

}
harvest(["1020", "1.5", "425", "4"])
harvest(["650", "2", "175", "3"])