"use strict"

function solveEquation(a, b, c) {
  const d = b**2-4*a*c;
  let arr;
  if (d < 0 ) {
     arr = [];
  } else if (d === 0) {
    arr = [-b / ( 2 * a )];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d) ) / (2*a), (-b - Math.sqrt(d) ) / (2*a)]
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
  let percentMonth = percent / 100 / 12;
  let bodyCredit = amount - contribution;
  let monthly = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  let totalSum = parseFloat((monthly * countMonths).toFixed(2));
  return totalSum;
  }
  return false;
}