function vacation(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let finalMoney = 0;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                finalMoney = budget * 0.3;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Camp - ${finalMoney.toFixed(2)}`);
                break;
            } else if (budget <= 1000) {
                finalMoney = budget *  0.4;
                console.log(`Somewhere in Balkans`);
                console.log(`Camp - ${finalMoney.toFixed(2)}`);
                break;
            } else if (budget > 1000) {
                finalMoney = budget *  0.9;
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${finalMoney.toFixed(2)}`);
                break
            }
        case "winter":
            if (budget <= 100) {
                finalMoney = budget *  0.7;
                console.log(`Somewhere in Bulgaria`);
                console.log(`Hotel - ${finalMoney.toFixed(2)}`);
                break;
            } else if (budget <= 1000) {
                finalMoney = budget *  0.8;
                console.log(`Somewhere in Balkans`);
                console.log(`Hotel - ${finalMoney.toFixed(2)}`);
                break;
            } else if (budget > 1000) {
                finalMoney = budget *  0.9;
                console.log(`Somewhere in Europe`);
                console.log(`Hotel - ${finalMoney.toFixed(2)}`);
                break;
            }
    }
}

vacation(["312", "summer"])