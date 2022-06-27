function speedLimit(input){
    let speed = Number(input[0]);
    const tenKm = 10;
    const fiveteeKm = 50;
    const hundredFiveKm = 150;
    const thousandKm = 1000;
    
    if (speed <= tenKm) {
        console.log("slow");
    } else if (speed >= tenKm && speed <= fiveteeKm) {
        console.log("average");
    } else if (speed >= fiveteeKm && speed <= hundredFiveKm) {
        console.log("fast"); 
    } else if (speed >= hundredFiveKm && speed <= thousandKm) {
        console.log("ultra fast");
    } else if (speed > thousandKm) {
        console.log("extremely fast");
    }
}

speedLimit(["3500"])