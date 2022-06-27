function operationBetween(input) {
    const numOne = Number(input[0]);
    const numTwo = Number(input[1]);
    const symbol = input[2];
    let totalNumber = 0;



    switch (symbol) {
        case "+": totalNumber = numOne + numTwo; if (totalNumber % 2 === 0) {
            console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber} - even`)
        } else {
            console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber} - odd`);
        } break;
        case "-": totalNumber = numOne - numTwo; if (totalNumber % 2 === 0) {
            console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber} - even`)
        } else {
            console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber} - odd`);
        } break;
        case "*": totalNumber = numOne * numTwo; if (totalNumber % 2 === 0) {
            console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber} - even`)
        } else {
            console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber} - odd`);
        } break;

        case "/": totalNumber = numOne / numTwo;
            if (numTwo !== 0) {
                console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber.toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${numOne} by zero`);
            }
            break;

        case "%": totalNumber = numOne % numTwo;
            if (numTwo !== 0) {
                console.log(`${numOne} ${symbol} ${numTwo} = ${totalNumber}`);
            } else {
                console.log(`Cannot divide ${numOne} by zero`);
            }
            break;
    }
}
operationBetween(["10",
"0",
"%"])

