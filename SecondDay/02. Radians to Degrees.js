function radiansToDegrees(input){
    const radians = Number(input[0]);
    const degrees = radians * 180 / Math.PI;
    const final = radians + degrees;
    console.log(degrees)
}

radiansToDegrees(["3.1416"])