function vegetableMarket(input){
    //Цена за килограм зеленчуци 
    const vegetableKgPrice = Number(input[0]);
    //Цена за килограм плодове 
    const fruitKgPrice = Number(input[1]);
    //Общо килограми на зеленчуците 
    const vegetableTotalKg = Number(input[2]);
    //Общо килограми на плодовете 
    const fruitTotalKg = Number(input[3]);
    const euro = 1.94;

    const n = vegetableKgPrice * vegetableTotalKg;
    const m = fruitKgPrice * fruitTotalKg;
    const TotalNandM = (n + m) / euro;

    console.log(TotalNandM.toFixed(2))
}

vegetableMarket(["0.194 ", "19.4 ", "10 ","10 "])