function green(input){
    const squareMeterHouse = Number(input[0]);
    const squareMeterPrice = 7.61;
    const decent = 0.18;
    const totalMeterPrice = squareMeterPrice * squareMeterHouse;
    const decentTotal = decent * totalMeterPrice;
    const finalSum = totalMeterPrice - decentTotal;
    console.log(`The final price is: ${finalSum} lv. The discount is: ${decentTotal}`)
}

green(["550"])
green(["150"])