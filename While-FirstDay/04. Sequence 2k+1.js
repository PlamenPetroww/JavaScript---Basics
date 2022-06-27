function sequence(input) {

    let index = 0;
    let n = Number(input[index]);
    let k = 1;

    while(n >= k) {
        console.log(k);
        k = k * 2 + 1;
    }


}

sequence([7])