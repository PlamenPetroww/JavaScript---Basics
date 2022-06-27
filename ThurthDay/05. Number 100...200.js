function numberTo(input){
    let num = Number(input[0]);
    const oneHundred = 100;
    const twoHundred = 200;
    if (num < oneHundred) {
        console.log("Less than 100");
    } else if (num >= oneHundred && num <= twoHundred) {
        console.log("Between 100 and 200");
    } else if (num > twoHundred) {
        console.log("Greater than 200");
    }
}

//numberTo(["95"])
//numberTo(["120"])
numberTo(["210"])