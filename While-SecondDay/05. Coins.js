function coins(input) {

    let suma = Number(input[0]);
    let tranzakciqMoneti = parseInt(suma * 100);
    moneti = 0;

    while (tranzakciqMoneti > 0) {
        if (tranzakciqMoneti - 200 >= 0) {
            moneti++;
            tranzakciqMoneti -= 200;
        } else if (tranzakciqMoneti - 100 >= 0) {
            moneti++;
            tranzakciqMoneti -= 100;
        } else if (tranzakciqMoneti - 50 >= 0) {
            moneti++;
            tranzakciqMoneti -= 50;
        } else if (tranzakciqMoneti - 20 >= 0) {
            moneti++;
            tranzakciqMoneti -= 20;
        } else if (tranzakciqMoneti - 10 >= 0) {
            moneti++;
            tranzakciqMoneti -= 10;
        } else if (tranzakciqMoneti - 5 >= 0) {
            moneti++;
            tranzakciqMoneti -= 5;
        } else if (tranzakciqMoneti - 2 >= 0) {
            moneti++;
            tranzakciqMoneti -= 2;
        } else if (tranzakciqMoneti - 1 >= 0) {
            moneti++;
            tranzakciqMoneti -= 1;
        }
    }
    console.log(moneti)
}

coins(["1.23"])