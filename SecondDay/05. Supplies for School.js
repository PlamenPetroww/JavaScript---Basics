function total(input){
    //⦁	Пакет химикали 
    const pen = Number(input[0]);
    //⦁	Пакет маркери 
    const marker = Number(input[1]);
    //⦁	Препарат
    const preparat = Number(input[2]);
    //Namalenie
    const discount = Number(input[3]);
    //SOLUTION
    const penPacks = pen * 5.8;
    const markerPacks = marker * 7.2;
    const preparatAll = preparat * 1.2;
    const totalPacks = (penPacks + markerPacks + preparatAll);
    const totalMoney = totalPacks - (totalPacks * 0.25);
    console.log(totalMoney)
}

total(["2 ","3 ","4 ","25 "])
total(["4 ","2 ","5 ","13 "])