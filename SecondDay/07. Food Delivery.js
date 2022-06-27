function menuTotal(input){
   const chickenMeal = 10.35;
   const fischMeal = 12.4; 
   const veggieMeal = 8.15;
   const delivery = 2.5;
   const chickenMealTotal = Number(input[0]);
   const fischMealTotal = Number(input[1]);
   const veggieMealTotal = Number(input[2]);
   const menuTotalAll = (chickenMeal * chickenMealTotal) + (fischMeal * fischMealTotal) + (veggieMeal * veggieMealTotal);
   const desert = menuTotalAll * 0.2;
   const menuTotalDesert = (menuTotalAll + desert) + delivery;
   console.log(menuTotalDesert)
}
menuTotal(["2 ","4 ","3 "])
menuTotal(["9 ","2 ","6 "])