function aluminumJoinery(input) {
    let index = 0;
    const ttlOrder = Number(input[index]);
    index++;
    const sizeOfJoinery = input[index];
    index++;
    const delivery = input[index];
    let priceOfJoinery = 0;
   
    switch (sizeOfJoinery) {
      case "90X130":
        priceOfJoinery = 110;
        if (ttlOrder >= 30 && ttlOrder < 60) {
          priceOfJoinery *= 0.95;
        } else if (ttlOrder >= 60) {
          priceOfJoinery *= 0.92;
        }
        break;
      case "100X150":
        priceOfJoinery = 140;
        if (ttlOrder >= 40 && ttlOrder < 80) {
          priceOfJoinery *= 0.94;
        } else if (ttlOrder >= 80) {
          priceOfJoinery *= 0.9;
        }
        break;
      case "130X180":
        priceOfJoinery = 190;
        if (ttlOrder >= 20 && ttlOrder < 50) {
          priceOfJoinery *= 0.93;
        } else if (ttlOrder >= 50) {
          priceOfJoinery *= 0.88;
        }
        break;
      case "200X300":
        priceOfJoinery = 250;
        if (ttlOrder >= 25 && ttlOrder < 50) {
          priceOfJoinery *= 0.91;
        } else if (ttlOrder >= 50) {
          priceOfJoinery *= 0.86;
        }
        break;
    }
    let ttlSum = ttlOrder * priceOfJoinery;
    if (delivery === "With delivery") {
      ttlSum += 60;
    }
    if (ttlOrder < 10) {
      console.log("Invalid order");
    } else if (ttlOrder > 99) {
      ttlSum *= 0.96;
      console.log(`${ttlSum.toFixed(2)} BGN`);
    } else {
      console.log(`${ttlSum.toFixed(2)} BGN`);
    }
  }

  aluminumJoinery(["12",
  "130X180",
  "Without delivery"])