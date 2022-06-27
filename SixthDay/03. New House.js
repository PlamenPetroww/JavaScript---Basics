function newHouse(input) {
    const priceOfRoses = 5;
    const priceOfDahlias = 3.8;
    const priceOfTulips = 2.8;
    const priceOfNarcissus = 3;
    const priceOfGladious = 2.5;
    const flowerType = input[0];
    const counterOfFlowers = Number(input[1]);
    const budget = Number(input[2]);
    let finalPrice = 0;

    switch (flowerType) {
        case "Roses":
            if (counterOfFlowers > 80) {
                finalPrice -= counterOfFlowers * priceOfRoses * 0.1;
            }
            finalPrice += counterOfFlowers * priceOfRoses;
            break;

        case "Dahlias":
            if (counterOfFlowers > 90) {
                finalPrice -= counterOfFlowers * priceOfDahlias * 0.15;
            }
            finalPrice += counterOfFlowers * priceOfDahlias;
            break;

        case "Tulips":
            if (counterOfFlowers > 80) {
                finalPrice -= counterOfFlowers * priceOfTulips * 0.15;
            }
            finalPrice += counterOfFlowers * priceOfTulips;
            break;

        case "Narcissus":
            if (counterOfFlowers < 120) {
                finalPrice += counterOfFlowers * priceOfNarcissus * 0.15;
            }
            finalPrice += counterOfFlowers * priceOfNarcissus;
            break;

        case "Gladiolus":
            if (counterOfFlowers < 80) {
                finalPrice += counterOfFlowers * priceOfGladious * 0.2;
            }
            finalPrice += counterOfFlowers * priceOfGladious;
            break;
    }
    if (budget >= finalPrice) {
        const moneyLeft = budget - finalPrice;
        console.log(`Hey, you have a great garden with ${counterOfFlowers} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        const moneyNeeded = finalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

newHouse(["Tulips", "88", "260"])