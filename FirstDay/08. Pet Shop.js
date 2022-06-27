function buyFood (input){
    const packsDogsNum = Number(input[0]);
    const packsCatsNum = Number(input[1]);
    const packsDogsPrice = 2.5;
    const packsCatsPrice = 4;
    const finalDogsPrice = packsDogsNum * packsDogsPrice;
    const finalCatsPrice = packsCatsNum * packsCatsPrice;
    const finalPrice = finalDogsPrice + finalCatsPrice;
    console.log(finalPrice + " lv.")
}

buyFood(["5 ","4 "])
buyFood(["13","9"])