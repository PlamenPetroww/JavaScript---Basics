function celsiusTo(input){
    const celsius = Number(input[0]);
    const fahrenheit = celsius * 1.8;
    celsiusToFahr = fahrenheit + 32;
    console.log(celsiusToFahr.toFixed(2));
}

celsiusTo(["25"])