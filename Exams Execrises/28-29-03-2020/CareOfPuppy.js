function solve(input) {

    let index = 0;
    let command = Number(input[index]) * 1000;
    index++;
    let hrana = 0;
    let ima = 0;


    while (command !== "Adopted") {
        hrana = Number(input[index]);
        ima += hrana;
        if(ima < 0) {
            console.log(`Food is not enough. You need ${Math.abs(ima)} grams more.`);
        }
        command = input[index];
        index++;
    }
    if (command === "Adopted") {
        if(ima >= 0) {
            console.log(`Food is enough! Leftovers: ${ima} grams.`);
            
        } 
    }
}

solve(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])