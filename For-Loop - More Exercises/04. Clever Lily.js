function cleverLily(input) {

    let index = 0;
    let age = Number(input[0]);
    let washMaschine = Number(input[1]);
    let toysPrice = Number(input[2]);
    let tempMoney = 10;
    let money = 0;
    let toyCounter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += tempMoney;
            tempMoney += 10;
            money -= 1;
        }
        else {
            toyCounter++;
        }
    }

    money += toyCounter * toysPrice;
    if(money >= washMaschine) {
        money -= washMaschine;
        console.log(`Yes! ${money.toFixed(2)}`);
    } else {
        washMaschine -= money;
        console.log(`No! ${washMaschine.toFixed(2)}`);
    }
}

cleverLily(["10", "170.00", "6"])
cleverLily(["21",
"1570.98",
"3"])