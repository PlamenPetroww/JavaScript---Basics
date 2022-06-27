function housePainting(input){
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);
    const greenPaint = 3.4;
    const redPaint = 4.3;
    const wallSide = x * y;
    const window = 1.5 * 1.5;
    const wallSideTotal = (2 * wallSide) - (2 * window);
    const wallBack = x * x;
    const door = 1.2 * 2;
    const wallBackTotal = 2 * wallBack - door;
    const totalWall = (wallSideTotal + wallBackTotal) / greenPaint;
    const roofSquare = 2 * (x * y);
    const roofTri = 2 * (x * h / 2);
    const totalRoof = (roofSquare + roofTri) / redPaint;
    console.log(totalWall.toFixed(2) +'\n' + totalRoof.toFixed(2));
}
housePainting(["6 ","10 ","5.2 "])
housePainting(["10.25 ","15.45 ","8.88 "])