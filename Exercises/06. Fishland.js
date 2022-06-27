function fishLand(input){
    const skumriq = Number(input[0]);
    const caca = Number(input[1]);
    const palamudKg = Number(input[2]);
    const safridKg = Number(input[3]);
    const midi = Number(input[4]);
   //Паламуд – 60% по-скъп от скумрията
    const palamud = skumriq + (skumriq * 0.6)
    //Сафрид – 80% по-скъп от цацата
    const safridPrice = caca + (caca * 0.8);
	//Миди – 7.50 лв. за килограм
    const midiKg = 7.5 * midi;
    //Solutions
    const palamudPrice =palamudKg * palamud;
    const safridTotalPrice = safridPrice * safridKg;
    const total = palamudPrice + safridTotalPrice + midiKg;
    console.log(total.toFixed(2))
}
fishLand(["6.90 ","4.20 ","1.5 ","2.5 ","1 "])
fishLand(["5.55 ","3.57 ","4.3 ","3.6 ","7 "])