function fishingBoats(input) {
    //⦁	Цената за наем на кораба през пролетта е  3000 лв.
    const priceForSpring = 3000;
    //⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
    const priceForSummerAndAutumn = 4200;
    //⦁	Цената за наем на кораба през зимата е  2600 лв.
    const priceForWinter = 2600;

    const budget = Number(input[0]);
    const season = input[1];
    const numFishermans = Number(input[2]);

    let discount = 0;

    switch (season) {
        case "Winter":
            discount = priceForWinter;
            break;
        case "Summer":
            discount = priceForSummerAndAutumn;
            break;
        case "Autumn":
            discount = priceForSummerAndAutumn;
            break;
        case "Spring":
            discount = priceForSpring;
            break;
    }
    if (numFishermans <= 6) {
        discount -= discount * 0.1
    } else if (numFishermans >7 && numFishermans <= 11) {
        discount -= discount * 0.15;
    } else if (numFishermans >= 12) {
        discount -= discount * 0.25;
    }
    if (numFishermans % 2 === 0 && season != "Autumn") {
        discount -= discount * 0.05;
    }
    if (budget >= discount) {
        const moneyLeft = budget - discount;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else if (discount > budget) {
        const moneyNeeded = discount - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}

fishingBoats(["2000",
"Autumn",
"12"])
