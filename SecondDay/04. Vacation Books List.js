function hoursTotal(input){
    const pages = Number(input[0]);
    const pagesPerHours = Number(input[1]);
    const daysPerBook = Number(input[2]);

    const pagesDay = pages / pagesPerHours;
    const hoursPerDay = pagesDay / daysPerBook;
    console.log(hoursPerDay)
}

hoursTotal(["212 ","20 ","2 "])
hoursTotal(["432 ","15 ","4 "])