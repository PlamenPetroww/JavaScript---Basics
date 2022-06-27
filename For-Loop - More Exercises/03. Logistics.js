function logistics(input) {

    let index = 0;
    let tovarNumber= Number(input[index]);
    index++;
    let busTonove = 0;
    let truckTonove = 0;
    let trainTonove= 0;
    //До 3 тона – микробус (200 лева на тон)
    let busPrice = 200;
    //От 4 до 11 тона – камион (175 лева на тон)
    let truckPrice = 175;
    //12 и повече тона – влак (120 лева на тон)
    let trainPrice = 120;
    let obshtoTovar = 0;


    for(let i = 1; i <= tovarNumber; i++) {
        let kolkoTona = Number(input[index]);
    index++;
    obshtoTovar += kolkoTona;
        
         if (kolkoTona <= 3) {
             busTonove += kolkoTona;
         } else if ( kolkoTona >= 4 && kolkoTona <= 11) {
             truckTonove += kolkoTona;
         } else if (kolkoTona >= 12) {
             trainTonove += kolkoTona;
         }
    }
    let srednaCena = (busTonove * busPrice + truckTonove * truckPrice + trainTonove * trainPrice) / obshtoTovar;
    let busPercent = busTonove / obshtoTovar * 100;
    let truckPercent = truckTonove / obshtoTovar * 100;
    let trainPercent = trainTonove / obshtoTovar * 100;
    console.log(srednaCena.toFixed(2));
    console.log(`${busPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);

}

logistics(["4", "1", "5", "16", "3"])