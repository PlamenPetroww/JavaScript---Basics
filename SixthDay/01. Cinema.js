function cinema(input) {
    const premierPrice = 12;
    const normalPrice = 7.5;
    const discountPrice = 5;

    const typeOfProject = input[0];
    const rows = Number(input[1]);
    const cols = Number(input[2]);

    let finalMoney = 0;

    switch (typeOfProject) {
        case "Premiere":
            finalMoney = rows * cols * premierPrice; break;
        case "Normal":
            finalMoney = rows * cols * normalPrice; break;
        case "Discount":
            finalMoney = rows * cols * discountPrice; break;
    }
    console.log(`${finalMoney.toFixed(2)} leva`)
}

cinema(["Premiere",
    "10",
    "12"])
