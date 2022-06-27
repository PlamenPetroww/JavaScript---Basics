function shooping(input){
const videoCardPrice = 250;

const budget = Number(input[0]);
const videoCards = Number(input[1]);
const processor = Number(input[2]);
const ram = Number(input[3]);

const videoCardsAll = videoCardPrice * videoCards;
const processorPrice = videoCardsAll * 0.35;
const ramPrice = videoCardsAll * 0.1;

let totalPrice = videoCardsAll + processorPrice * processor + ramPrice * ram;
if (videoCards > processor) {
    totalPrice *= 0.85;
}

const diffence = Math.abs(totalPrice - budget).toFixed(2);
if (totalPrice <= budget) {
    console.log(`You have ${diffence} leva left!`)
} else {
    console.log(`Not enough money! You need ${diffence} leva more!`)
}

}

shooping(["900","2","1","3"])
//shooping(["920.45","3","1","1"])