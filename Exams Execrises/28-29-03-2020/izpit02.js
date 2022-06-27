function solve(input) {

    let tanciori = Number(input[0]);
    let tochki = Number(input[1]);
    let sezon = input[2];
    let mqsto = input[3];
    let kudeSustezanie = tanciori * tochki;
    let total = 0;
    let chujbina = 0;
    let blagotvoritelnost = 0;
    let zaTqh = 0;  

    switch (sezon) {
        case "summer":
            if (mqsto === "Abroad") {
                chujbina = kudeSustezanie + (kudeSustezanie * 0.5);
                total = chujbina - (chujbina * 0.1);
                break;
            } else if (mqsto === "Bulgaria") {
                total = kudeSustezanie - (kudeSustezanie * 0.05);
                break;
            }
        case "winter":
            if (mqsto === "Abroad") {
                chujbina = kudeSustezanie + (kudeSustezanie * 0.5);
                total = chujbina - (chujbina * 0.15);
                break;
            } else if (mqsto === "Bulgaria") {
                total = kudeSustezanie - (kudeSustezanie * 0.08);
                break;
            }

    }
    blagotvoritelnost = total * 0.75;
    zaTqh = (total - blagotvoritelnost) / tanciori;
    console.log(`Charity - ${blagotvoritelnost.toFixed(2)}`);
    console.log(`Money per dancer - ${zaTqh.toFixed(2)}`)
}

solve(["1",
"89.5",
"summer",
"Abroad"])