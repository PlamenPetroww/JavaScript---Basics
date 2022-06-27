function tabs(input) {

    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let currentTabs = 0;

    for(let i = 0; i < openTabs; i++) {
        currentTabs = input[index];
        index++;
         if(currentTabs === "Facebook") {
             salary -= 150;
         } else if(currentTabs === "Instagram") {
             salary -= 100;
         } else if(currentTabs === "Reddit") {
             salary -=50;
         }
    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`)
    } else {
        console.log(salary)
    }
}

tabs(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])