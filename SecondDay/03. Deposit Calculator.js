function calculatorDeposit(input){
    const depositSum = Number(input[0]);
    const depositTime = Number(input[1]);
    const yearsPercent = Number(input[2]);

    const plusPercent = depositSum * (yearsPercent / 100);
    const percentPerMonth = plusPercent / 12;
    const finalSum = depositSum + depositTime * percentPerMonth;
    console.log(finalSum)
}

calculatorDeposit(["200 ","3 ","5.7 "])
calculatorDeposit(["2350","6 ","7 "])