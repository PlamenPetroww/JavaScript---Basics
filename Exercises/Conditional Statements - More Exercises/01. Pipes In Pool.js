function pool(input) {
    const poolVol = Number(input[0]);
    const firstPipe = Number(input[1]);
    const secondPipe = Number(input[2]);
    const withoutWork = Number(input[3]);

    const firstPipeForHours = firstPipe * withoutWork;
    const secondPipeForHours = secondPipe * withoutWork;
    const pipeTogether = firstPipeForHours + secondPipeForHours;
    const firstPipeInPercent = (firstPipeForHours / pipeTogether) * 100;
    const secondPipeInPercent = (secondPipeForHours / pipeTogether) * 100;
    const pipePoolVol = (pipeTogether / poolVol) * 100;

    if (poolVol >= pipeTogether) {
        console.log(`The pool is ${pipePoolVol.toFixed(2)}% full. Pipe 1: ${firstPipeInPercent.toFixed(2)}%. Pipe 2: ${secondPipeInPercent.toFixed(2)}%.`);
    } else if (pipeTogether >= poolVol){
        const waterMoor = pipeTogether - poolVol;
        console.log(`For ${withoutWork.toFixed(2)} hours the pool overflows with ${waterMoor.toFixed(2)} liters.`);
    }
}

pool(["100", "100", "100", "2.5"])