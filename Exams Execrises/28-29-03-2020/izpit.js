function solve(input){

    let hora = Number(input[0]);
    let noshtuvki = Number(input[1]);
    let kartiZaTransport = Number(input[2]);
    let biletiZaMuzei = Number(input[3]);

    let noshtuvka = 20;
    let kartaTransport = 1.6;
    let bilet = 6;

    let noshtuvkaCena = noshtuvki * noshtuvka;
    let kartiCena = kartiZaTransport * kartaTransport;
    let biletiCena = biletiZaMuzei * bilet;

    let obshto = (noshtuvkaCena + kartiCena + biletiCena) * hora;
    let total = obshto + (obshto * 0.25);
    console.log(total.toFixed(2))
    



}

solve(["20",
"14",
"30",
"6"])