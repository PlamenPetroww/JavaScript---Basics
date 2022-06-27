    function money(input) {
    const budget = Number(input[0]);
    const statistic = Number(input[1]);
    const equipment = Number(input[2]);
    const decor = budget * 0.1;
    let clothes = statistic * equipment;
    if ( statistic > 150) {
        clothes *= 0.9;
    }

    const totalMoney = decor + clothes

    if (totalMoney > budget) {
        let moneyNeeded = totalMoney - budget;
        console.log(`Not enough money! \nWingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    } else {
        let moneyLeft = budget - totalMoney;
        console.log(`Action! \nWingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
    }

money(["20000","120","55.5"])
money(["9587.88","222","55.68"])
