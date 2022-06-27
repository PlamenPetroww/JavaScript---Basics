    function intervals(input) {

        let index = 0;
        let kolkoHodaSteIma = Number(input[index]);
        index++;
        let doDevet = 0;
        let doDevetnadeset = 0;
        let doDvaisetIDevet = 0;
        let doTriisetIDevet = 0;
        let doPedeset = 0;
        let nevalidnoChislo = 0;
        let totalPoints = 0;


        for (let i = 1; i <= kolkoHodaSteIma; i++) {
            let chisloNomer = Number(input[index]);
            index++;

            if (chisloNomer >= 0 && chisloNomer <= 9) {
                doDevet++;
                totalPoints += chisloNomer * 0.2;
            } else if (chisloNomer >= 10 && chisloNomer <= 19) {
                doDevetnadeset++;
                totalPoints += chisloNomer * 0.3;
            } else if (chisloNomer >= 20 && chisloNomer <= 29) {
                doDvaisetIDevet++;
                totalPoints += chisloNomer * 0.4;
            } else if (chisloNomer >= 30 && chisloNomer <= 39) {
                doTriisetIDevet++;
                totalPoints += 50;
            } else if (chisloNomer >= 40 && chisloNomer <= 50) {
                doPedeset++;
                totalPoints += 100;
            } else {
                nevalidnoChislo++;
                totalPoints = totalPoints / 2;
            }
        } console.log(totalPoints.toFixed(2))
        let percentDevet = doDevet / kolkoHodaSteIma * 100;
        let percentDvaiset = doDevetnadeset / kolkoHodaSteIma * 100;
        let percentTrideset = doDvaisetIDevet / kolkoHodaSteIma * 100;
        let percentChetirideset = doTriisetIDevet / kolkoHodaSteIma * 100;
        let percentPetdeset = doPedeset / kolkoHodaSteIma * 100;
        let percentNevalidni = nevalidnoChislo / kolkoHodaSteIma * 100;
        console.log(`From 0 to 9: ${percentDevet.toFixed(2)}%`);
        console.log(`From 10 to 19: ${percentDvaiset.toFixed(2)}%`);
        console.log(`From 20 to 29: ${percentTrideset.toFixed(2)}%`);
        console.log(`From 30 to 39: ${percentChetirideset.toFixed(2)}%`);
        console.log(`From 40 to 50: ${percentPetdeset.toFixed(2)}%`);
        console.log(`Invalid numbers: ${percentNevalidni.toFixed(2)}%`);
    }

intervals(["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"])