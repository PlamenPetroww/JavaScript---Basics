function total(input){
    const type = input[0];
    const a = Number(input[1]);
    const b = Number(input[2]);
    let result = "";

    if (type === "square" ) {
        result = a * a;
    } else if (type === "rectangle") {
        result = a * b;
    } else if (type === "circle") {
        result = Math.PI * Math.pow(a, 2);
    } else {
        result = a * b / 2;
    }
    console.log(result.toFixed(3))
}
//total(["square", "5"])
total(["rectangle","7","2.5"])
//total(["circle","6"])
//total(["triangle","4.5","20"])