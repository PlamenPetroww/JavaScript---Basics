function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    let playerIsBest = "";
    let goalIsBest = 0;
    let isCommandEnd = true;
   
    while (command !== "END") {
      let player = input[index];
      index++;
      let goal = Number(input[index]);
      if (goal > goalIsBest) {
        goalIsBest = goal;
        playerIsBest = player;
      }
      if (goalIsBest >= 10) {
        console.log(`${playerIsBest} is the best player!`);
        console.log(`He has scored ${goalIsBest} goals and made a hat-trick !!!`);
        isCommandEnd = false;
        break;
      }
      index++;
      command = input[index];
    }
   
    if (command === "END") {
      if (goalIsBest >= 3) {
        console.log(`${playerIsBest} is the best player!`);
        console.log(`He has scored ${goalIsBest} goals and made a hat-trick !!!`);
      } else {
        console.log(`${playerIsBest} is the best player!`);
        console.log(`He has scored ${goalIsBest} goals.`);
      }
    }
  }

  bestPlayer(["Silva",
  "5",
  "Harry Kane",
  "10"])