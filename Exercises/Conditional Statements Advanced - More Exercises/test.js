function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numberOfPeople = Number(input[2]);
    let vipTicket = 499.99;
    let normalTicket = 249.99;
    let tripPrice = 0;
    let moneyLeft =0;
    let moneyLeftAfterTrip = 0;
    let moneyNeeded = 0;



    switch (category) {
        case "Normal":
            if (numberOfPeople = 1 && numberOfPeople <= 4) {
                tripPrice = budget * 0.75;
                moneyLeft = Math.abs(budget - tripPrice);
                moneyLeftAfterTrip = moneyLeft - normalTicket;
            } else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
                tripPrice = budget * 0.6;
                moneyLeft = Math.abs(budget - normalTicket);
                moneyLeftAfterTrip = moneyLeft - normalTicket;
            } else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
                tripPrice = budget * 0.5;
                moneyLeft = Math.abs(budget - normalTicket);
            } else if (numberOfPeople >= 25 && numberOfPeople <= 49) {
                tripPrice = budget * 0.4;
                moneyLeft = Math.abs(budget - tripPrice);
                moneyLeftAfterTrip = moneyLeft - normalTicket;
            } else if (numberOfPeople >=50) {
                tripPrice = budget * 0.25;
                moneyLeft = Math.abs(budget - tripPrice);
                moneyLeftAfterTrip = moneyLeft - normalTicket;
                console.log(`Yes! You have ${moneyLeftAfterTrip} leva left."`);
            } else {
                moneyNeeded = normalTicket - moneyLeft
                console.log(`Not enough money! You need ${moneyNeeded} leva.`);
            }
            break;
            case "VIP" :
                if (numberOfPeople = 1 && numberOfPeople <= 4) {
                    tripPrice = budget * 0.75;
                    moneyLeft = Math.abs(budget - tripPrice);
                    moneyLeftAfterTrip = moneyLeft - vipTicket;
                } else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
                    tripPrice = budget * 0.6;
                    moneyLeft = Math.abs(budget - vipTicket);
                    moneyLeftAfterTrip = moneyLeft - vipTicket;
                } else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
                    tripPrice = budget * 0.5;
                    moneyLeft = Math.abs(budget - vipTicket);
                } else if (numberOfPeople >= 25 && numberOfPeople <= 49) {
                    tripPrice = budget * 0.4;
                    moneyLeft = Math.abs(budget - tripPrice);
                    moneyLeftAfterTrip = moneyLeft - vipTicket;
                    console.log(`Yes! You have ${moneyLeftAfterTrip} leva left."`);
                } else if (numberOfPeople >=50) {
                    tripPrice = budget * 0.25;
                    moneyLeft = Math.abs(budget - tripPrice);
                    moneyLeftAfterTrip = moneyLeft - vipTicket;
                } else {
                    moneyNeeded = vipTicket - moneyLeft;
                    console.log(`Not enough money! You need ${moneyNeeded} leva.`);
                }
                
                break;
    }
}

matchTickets(["1000", "Normal", "1"])