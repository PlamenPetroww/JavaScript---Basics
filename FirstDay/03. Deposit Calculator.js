function totalSum (input) {
    // ⦁	Депозирана сума 
    const depositSum = Number(input[0]);
    // ⦁	Срок на депозита 
    const depositTime = Number(input[1]);
    // ⦁	Годишен лихвен процент 
    const yearsPercent = Number(input[2]);
    const interest = (depositSum * yearsPercent) / 100;
    const interestPerMonth = interest / 12;
    const finalSum = depositSum + depositTime * interestPerMonth;
    console.log(finalSum)
}

totalSum(["200 ","3 ","5.7 "])