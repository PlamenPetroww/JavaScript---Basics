function solve(input) {

    //Мъжко(mens) - 15лв.
    let mujko = 15;
    //Дамско(ladies) – 20лв.
    let damsko = 20;
    //Детско(kids) – 10лв.
    let detsko = 10;
    //Поддръжка(touch up) – 20лв.
    let dokosvane = 20;
    //Пълно боядисване(full color) – 30лв.
    let boqdisvane = 30;
    let index = 0;
    let cel = Number(input[index]);
    let pricheska = "";
    let money = 0;
    let nedostigat = 0;
    let procedura = "";

    while (pricheska !== "closed") {

        index++;
        pricheska = input[index];

        if (money >= cel) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${money}lv.`);
            break;
        }
        if (pricheska === "haircut") {
            index++;
            procedura = input[index];
            if (procedura === "mens") {
                money += mujko;
            }
            if (procedura === "ladies") {
                money += damsko;
            }
            if (procedura === "kids") {
                money += detsko;
            }
        }
        if (pricheska === "color") {
            index++;
            procedura = input[index];
            if (procedura === "touch up") {
                money += dokosvane;
            }
            if (procedura === "full color") {
                money += boqdisvane;
            }
        }

    }
    if (pricheska === "closed") {
        if (money < cel) {
            nedostigat = cel - money;
            console.log(`Target not reached! You need ${nedostigat}lv. more.`);
            console.log(`Earned money: ${money}lv.`);
        }

    }
}

solve(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])