function ivancho(input) {
    let index = 0;
   
    let nasledeniPari = Number(input[0]);
    index++;
    let godinaNaJiveene = Number(input[1]);
    index++
    let pariZaGodina = 0;
    let subraniPari = 0;
    let segashnaGodina = 1801;
    let godini = 18;
    let segashnaVuzrast = 0;
    let razlika = 0;
    
    for (let i = segashnaGodina; i <=godinaNaJiveene; i++) {
        if (i % 2 === 0) {
          pariZaGodina += 12000;
        } else if ( i % 2 !== 0){
          segashnaVuzrast = godini + Math.abs(segashnaGodina - i);
          subraniPari += 12000 + (segashnaVuzrast * 50);
        }
      }  
        razlika = Math.abs(pariZaGodina + subraniPari);
        if (nasledeniPari >= razlika) {
            razlika = nasledeniPari - razlika;
          console.log(`Yes! He will live a carefree life and will have ${razlika.toFixed(2)} dollars left.`);
        } else  {
            razlika = razlika - nasledeniPari;
          console.log(`He will need ${razlika.toFixed(2)} dollars to survive.`);
        } 
  }

  ivancho(["50000", "1802"])
  ivancho(["100000.15", "1808"])