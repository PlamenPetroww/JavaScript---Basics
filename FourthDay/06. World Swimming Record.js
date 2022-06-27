function worldReocord(input) {
const recordSek = Number(input[0]);
const meterDistance = Number(input[1]);
const sekPerMeter = Number(input[2]);
const secAdded = Math.floor(meterDistance / 15) * 12.5;
const totalTime = meterDistance * sekPerMeter + secAdded;
if (totalTime >= recordSek) {
    const final = totalTime - recordSek;
     console.log(`No, he failed! He was ${final.toFixed(2)} seconds slower.`)
    } else {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
 }
}

//worldReocord(["10464","1500","20"])
worldReocord(["55555.67","3017","5.03"])