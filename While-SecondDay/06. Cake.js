function cake(input) {

    let shirina = Number(input[0]);
    let duljina = Number(input[1]);
    let golemina = shirina * duljina;
    let index = 2;
    let parche = Number(input[index]);
    index++;
    let izqdeni = 0;
    

    while (parche !== "STOP") {
        golemina -= parche;
        izqdeni += parche;
        if (golemina < 0) {
            console.log(`No more cake left! You need ${Math.abs(golemina)} pieces more.`);
            break;
        }
        parche = (input[index]);
        index++;
    }
    if(parche === "STOP") {
        if(izqdeni > golemina) {
            console.log(`${golemina} pieces are left.`);
        } 
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])