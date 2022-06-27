function aquarium(input){
    const width = Number(input[0]);
    const breit = Number(input[1]);
    const height = Number(input[2]);
    const percent = Number(input[3]) / 100;
    const allWater = width * breit * height;
    const allWaterNeeded = allWater * 0.001
    const allWaterTotal = allWaterNeeded * (1 - percent);
    console.log(allWaterTotal)
}

aquarium(["85 ","75 ","47 ","17 "])
aquarium(["105 ","77 ","89 ","18.5 "])