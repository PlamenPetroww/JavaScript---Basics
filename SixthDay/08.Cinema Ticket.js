function ticket(input) {
    const day = input[0];

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        console.log(12);
    } else if (day === "Wednesday" || day === "Thursday") {
        console.log(14);
    } else {
        console.log(16);
    }
}

ticket(["asd"])