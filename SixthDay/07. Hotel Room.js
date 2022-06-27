function room(input) {
    const month = input[0];
    const night = Number(input[1]);
    let apartamentPriceMayOct = 65;
    let studioPriceMayOct = 50;
    let apartamentPriceJunSep = 68.7;
    let studioPriceJunSep = 75.2;
    let apartamentPriceJuliAugust = 77;
    let studioPriceJuliAugust = 76;
    let totalMoneyApartment = 0;
    let totalMoneyStudio = 0;

    switch (month) {
        case "May":
        case "October":
            totalMoneyStudio = night * studioPriceMayOct;
            totalMoneyApartment = night * apartamentPriceMayOct;
            if (night > 7 && night < 14) {
                totalMoneyStudio -= totalMoneyStudio * 0.05;
            } else if (night > 14) {
                totalMoneyStudio -= totalMoneyStudio * 0.3;
            }
            break; 
        case "June":
        case "September":
            totalMoneyStudio = night * studioPriceJunSep;
            totalMoneyApartment = night * apartamentPriceJunSep;
            if (night > 14) {
                totalMoneyStudio -= totalMoneyStudio * 0.2;
            }
            break;
        case "August":
        case "July":
            totalMoneyStudio = night * studioPriceJuliAugust;
            totalMoneyApartment = night * apartamentPriceJuliAugust;
            break;
    } 
    if (night > 14) {
        totalMoneyApartment -= totalMoneyApartment * 0.1;
    }
    console.log(`Apartment: ${totalMoneyApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalMoneyStudio.toFixed(2)} lv.`);
}


room(["May",
"15"])	