function solve() {

    let i = 0;
    while (i < 10) {
        if (i % 2 === 0) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }

}

solve(["2",
    "12"])

