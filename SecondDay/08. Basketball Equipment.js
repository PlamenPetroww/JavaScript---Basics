function djesyCost(input){
    const costPerYear = Number(input[0]);
    const shoes = costPerYear * 0.6;
    const equipment = shoes * 0.8;
    const ball = equipment * 0.25;
    const allAccessories  = ball * 0.2;
    const total = shoes + equipment + ball + allAccessories + costPerYear;
    console.log(total)
}

djesyCost(["365 "])
djesyCost(["550 "])
