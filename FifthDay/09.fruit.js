function fruitShop(input) {

    const fruit = input[0];
    const day = input[1];
    const kg = Number(input[2]);
    let sum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana" : sum = kg * 2.5; break;
            case "apple" : sum = kg * 1.2; break;
            case "orange" : sum = kg * 0.85; break;
            case "grapefruit" : sum = kg * 1.45; break;
            case "kiwi" : sum = kg * 2.7; break;
            case "pineapple" : sum = kg * 5.5; break;
            case "grapes" : sum = kg * 3.85; break;
        }
    }
    else if (day === "Saturday" || day ==="Sunday") {
        switch(fruit) {
            case "banana": sum = kg * 2.70; break;
            case "apple": sum = kg * 1.25; break;
            case "orange": sum = kg * 0.90; break;
            case "grapefruit": sum = kg * 1.60; break;
            case "kiwi": sum = kg * 3.00; break;
            case "pineapple": sum = kg * 5.60; break;
            case "grapes": sum = kg * 4.20; break;
        }
    }
    if (sum != 0) {
      console.log(sum.toFixed(2));
    } else {
      console.log("error");
    }
}

fruitShop(["apple", "Tuesday", "2"])