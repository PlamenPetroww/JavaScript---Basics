function launch(input){
const serial = input[0];
const epizodLenght = Number(input[1]);
const pause = Number(input[2]);
const launchTime = pause / 8;
const relaxTime = pause / 4;
const timeForMovie = Math.abs(pause - launchTime - relaxTime);

const leftTime =  Math.abs(timeForMovie - epizodLenght);
if (timeForMovie >= epizodLenght) {
    console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(leftTime)} minutes free time.`)
} else {
    console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(leftTime)} more minutes.`)
}

}

//launch(["Game of Thrones","60","96"])
launch(["Teen Wolf","48","60"])