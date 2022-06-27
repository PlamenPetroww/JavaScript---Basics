function pool(input){
const obemPool = Number(input[0]);
const firstTrubaPerHour = Number(input[1]);
const secondTrubaPerHour = Number(input[2]);
const missedHours = Number(input[3]);

const trubaTogether = (firstTrubaPerHour + secondTrubaPerHour) * missedHours;
const pipeOne = firstTrubaPerHour * 3;
const pipeTwo = secondTrubaPerHour * 3;
const pipeWater = pipeOne + pipeTwo;
const pipeTogether =(pipeOne + pipeTwo) / obemPool * 100;
const pipeOneInPercent = (pipeOne / pipeWater) * 100;
const pipeTwoInPercent = (pipeTwo / pipeWater) * 100;

if (trubaTogether < obemPool) {
    console.log(`The pool is ${pipeTogether.toFixed(2)}% full. Pipe 1: ${pipeOneInPercent.toFixed(2)}%. Pipe 2: ${pipeTwoInPercent.toFixed(2)}%."`)
} else if (trubaTogether > obemPool) {
    const moreWater = trubaTogether - obemPool;
    console.log(`For ${missedHours.toFixed(2)} hours the pool overflows with ${moreWater.toFixed(2)} liters."`)
}
}

pool(["1000","100","120","3"])
//pool(["100","100","100","2.5"])