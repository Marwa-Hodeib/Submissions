var shoe_size = prompt("enter ur shoe size", "shoe size");
var year = prompt("enter ur year ", "year");

function calculate() {
  let a = shoe_size * 2;
  let b = a + 5;
  let c = b * 50;
  let d = c - year;
  let res = d + 1766;

  alert(res);
}

calculate();
