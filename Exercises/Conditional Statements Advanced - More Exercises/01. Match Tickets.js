function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let numberOfPeople = Number(input[2]);
    let vipTicket = 499.99;
    let normalTicket = 249.99;
    let tripPrice = 0;
    let buyTicket = 0;
    let moneyLeft = 0;
    let moneyNeed = 0;

    if (category === "Normal" && numberOfPeople >= 1 && numberOfPeople <= 4) {
        tripPrice = Math.abs(budget * 0.75);
        buyTicket = (budget - tripPrice) - normalTicket;
    } else if (category === "Normal" && numberOfPeople >= 5 && numberOfPeople <= 9) {
        tripPrice = Math.abs(budget * 0.6);
        buyTicket = (budget - tripPrice) - normalTicket;
    } else if (category === "Normal" && numberOfPeople >= 10 && numberOfPeople <= 24) {
        tripPrice = Math.abs(budget * 0.5);
        buyTicket = (budget - tripPrice) - normalTicket;
    } else if (category === "Normal" && numberOfPeople >= 25 && numberOfPeople <= 49) {
        tripPrice = Math.abs(budget * 0.4);
        buyTicket = (budget - tripPrice) - normalTicket;
    } else if (category === "Normal" && numberOfPeople >= 50) {
        tripPrice = Math.abs(budget * 0.25);
        buyTicket = (budget - tripPrice) - normalTicket;
    }
    if (category === "VIP" && numberOfPeople >= 1 && numberOfPeople <= 4) {
        tripPrice = Math.abs(budget * 0.75);
        buyTicket = (budget - tripPrice) - vipTicket;
    } else if (category === "Normal" && numberOfPeople >= 5 && numberOfPeople <= 9) {
        tripPrice = Math.abs(budget * 0.6);
        buyTicket = (budget - tripPrice) - vipTicket;
    } else if (category === "Normal" && numberOfPeople >= 10 && numberOfPeople <= 24) {
        tripPrice = Math.abs(budget * 0.5);
        buyTicket = (budget - tripPrice) - vipTicket;
    } else if (category === "Normal" && numberOfPeople >= 25 && numberOfPeople <= 49) {
        tripPrice = Math.abs(budget * 0.4);
        buyTicket = (budget - tripPrice) - vipTicket;
    } else if (category === "Normal" && numberOfPeople >= 50) {
        tripPrice = Math.abs(budget * 0.25);
        buyTicket = (budget - tripPrice) - vipTicket;
    }
      if (buyTicket > budget) {
        moneyLeft = buyTicket - budget;
        console.log(`Yes! You have ${moneyLeft} leva left.`);
      } else if (budget > buyTicket) {
        moneyNeed = budget - buyTicket
        console.log(`Not enough money! You need ${moneyNeed} leva.`);
      }
    }
matchTickets(["1000", "Normal", "1"])