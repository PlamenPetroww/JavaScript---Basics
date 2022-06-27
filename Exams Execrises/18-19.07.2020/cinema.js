function cinema(input) {

    let index = 0;
    let movie = ``;
    let freeSpace = 0;
    let ticket = 0;
    let standard = 0
    let student = 0;
    let kid = 0;
    let totalFreeSpace = 0;
    let hallIsFull = 0;
    let totalTickets = 0;
    let freeSpaceInTheCinema = 0;

    while(movie !== "Finish") {
        movie = input[index];
        index++;
        freeSpace = Number(input[index]);
        freeSpaceInTheCinema = freeSpace;
        index++;
        ticket = input[index];

        while(ticket !== "End") {
            
            if(ticket === "standard") {
                standard++;
                totalTickets++;
            } else if (ticket === "student") {
                student++;
                totalTickets++;
            } else if (ticket === "kid") {
                kid++;
                totalTickets++;
            }
            freeSpaceInTheCinema--;
        if(freeSpaceInTheCinema === 0) {
            break;
        }
            index++;
            ticket = input[index];
        }
        
        totalFreeSpace = freeSpace - freeSpaceInTheCinema;
        hallIsFull = (totalFreeSpace / freeSpace) * 100;
        console.log(`${movie} - ${hallIsFull.toFixed(2)}% full.`)
        index++;
        movie = input[index];
    }

    let allTickets = standard + student + kid;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${((student / allTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standard / allTickets) * 100)   .toFixed(2)}% standard tickets.`);
    console.log(`${((kid / allTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinema(["Taxi",
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