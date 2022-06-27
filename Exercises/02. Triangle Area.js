function triangleArea(input){
    const b1 = Number(input[0]);
    const h = Number(input[1]);
    const total = b1 * h / 2;
    console.log(total.toFixed(2));
}

triangleArea(["20 ","30 "])