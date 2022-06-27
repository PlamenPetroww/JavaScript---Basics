function hoursFinal(input){
    const archName = (input[0]);
    const projektNum = Number(input[1]);
    const oneProject = 3
    const hoursNeedet = projektNum * oneProject;
    console.log("The architect " + archName + " will need " + hoursNeedet + " hours to complete " + projektNum + " project/s.")
}

hoursFinal(["George ","4 "])
hoursFinal(["Sanya ","9 "])