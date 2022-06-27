function passwordGuess(input){
    let pass = (input[0]);
    const passCorrect = "s3cr3t!P@ssw0rd";
    if (pass === passCorrect) {
    console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"])

