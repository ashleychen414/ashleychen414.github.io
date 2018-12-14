
var totalDrinks = 0

document.querySelector ('#click-me').onclick = drinksDay

function drinksDay () {
   var age = document.querySelector ('#age').value;
   var maxAge = document.querySelector ('#max-age').value;
   var drink = document.querySelector ('#item').value;
   var drinksDay = document.querySelector ('#num-per-day').value;
  totalDrinks = (maxAge - age) * (drinksDay * 365)
  totalDrinks = parseInt (totalDrinks)
  console.log (totalDrinks)
document.querySelector ('#solution').innerHTML = totalDrinks;
document.querySelector('#drink').innerHTML = drink;

}
