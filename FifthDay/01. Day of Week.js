function dayOfWeek(input) {
    const day = Number(input[0]);

    switch (day) {
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        default : console.log("Error")
    }
}

dayOfWeek([5])