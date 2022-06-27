function trapeziodArea(input){
    const basisB1 = Number(input[0]);
    const basisB2 = Number(input[1]);
    const height = Number(input[2]);
    const trapeziodTour = (basisB1 + basisB2) * height / 2;
    console.log(trapeziodTour.toFixed(2));
}

trapeziodArea(["8 ","13 ", "7 "])