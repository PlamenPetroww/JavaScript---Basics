function solve(input) {

    let teniskaCena = Number(input[0]);
    let nujnaSuma = Number(input[1]);
    let shorti = teniskaCena * 0.75;
    let chorapi = shorti * 0.2;
    let butonki = (shorti + teniskaCena) * 2;
    let total = (teniskaCena + shorti + chorapi + butonki);
    let totalTopka = total - (total * 0.15);
    
    if(totalTopka >= nujnaSuma) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${totalTopka.toFixed(2)} lv.`);
    } else {
        let nedostigat = nujnaSuma - totalTopka;
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${nedostigat.toFixed(2)} lv. more.`);
    }

}

solve(["59.99",
"500"])