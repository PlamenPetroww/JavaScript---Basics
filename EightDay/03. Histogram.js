function histogram(input) {

    let n = Number(input[0]);
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    let p4Count = 0;
    let p5Count = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);

        if (num < 200) {
            p1Count++;
        } else if (num >= 200 && num <= 399) {
            p2Count++;
        } else if (num >= 400 && num <= 599) {
            p3Count++;
        } else if (num >= 600 && num <= 799) {
            p4Count++;
        } else {
            p5Count++;
        }


    }

    let p1CountPercent = (p1Count / n * 100).toFixed(2);
    let p2CountPercent = (p2Count / n * 100).toFixed(2);
    let p3CountPercent = (p3Count / n * 100).toFixed(2);
    let p4CountPercent = (p4Count / n * 100).toFixed(2);
    let p5CountPercent = (p5Count / n * 100).toFixed(2);

    console.log(`${p1CountPercent}%`)
    console.log(`${p2CountPercent}%`)
    console.log(`${p3CountPercent}%`)
    console.log(`${p4CountPercent}%`)
    console.log(`${p5CountPercent}%`)

}

histogram(["7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799"])


