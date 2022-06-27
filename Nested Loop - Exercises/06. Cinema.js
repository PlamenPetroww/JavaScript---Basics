function cinemaTickets(input) {

    let index = 0;
    let inputLine = input[index];
    let countStandart = 0;
    let countKids = 0;
    let countStudent = 0;

    while (inputLine !== "Finish") {
        let imeNaFilm = inputLine;
        index++;
        let wsichkiBileti = Number(input[index]);
        let svobodniMesta = wsichkiBileti;
        index++;
        let bilet = input[index];
        while (bilet !== "End") {
            switch (bilet) {
                case "standard":
                    countStandart++;
                    break;
                case "kid":
                    countKids++;
                    break;
                case "student":
                    countStudent++;
                    break;
            }
            svobodniMesta--;
            if (svobodniMesta === 0) {
                break;
            }
            index++;
            bilet = input[index];
        }
        let zakupeniBileti = wsichkiBileti - svobodniMesta
        let percentFull = zakupeniBileti / wsichkiBileti * 100;
        console.log(`${imeNaFilm} - ${percentFull.toFixed(2)}% full.`);
        index++;
        inputLine = input[index];
    }
    let allBileti = countStudent + countKids + countStandart;
    console.log(`Total tickets: ${allBileti}`);
    console.log(`${(countStudent / allBileti * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandart / allBileti * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKids / allBileti * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])