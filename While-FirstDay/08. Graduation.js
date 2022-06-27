function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let counter = 1;
    let sumGrade = 0;
    let avgGrade = 0;
    let ivHave = false;

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4) {
            counter++;
            if (counter > 2) {
                ivHave = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++;
    }
    if (!ivHave) {
        avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])