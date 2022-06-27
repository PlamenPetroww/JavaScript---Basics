function total (input){
    const nylon = Number(input[0]);
    const color = Number(input[1]);
    const preparat = Number(input[2]);
    const hoursMasters = Number(input[3]);
    const nylonPerQm = (nylon + 2) * 1.5;
    const colorPerQm = (color + (color * 0.1)) * 14.5;
    const preparatQm = preparat * 5;
    const perQm = nylonPerQm + colorPerQm + preparatQm + 0.4;
    const hoursMastersPercent = (perQm * 0.3) * hoursMasters;
    const finalSum = perQm + hoursMastersPercent;
    console.log(finalSum)
}

total(["10 ","11 ","4 ","8 "])
total(["5 ","10 ","10 ","1 "])