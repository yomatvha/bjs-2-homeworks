"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return "1st arg is not a number!";
  }
  if (isNaN(contribution)) {
    return "2nd arg is not a number!";
  }
  if (isNaN(amount)) {
    return "3rd arg is not a number!";
  }
  if (isNaN(countMonths)) {
    return "4th arg is not a number!";
  }
  let monthPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent,countMonths) - 1)));
  let totalPayment = Number((monthPayment * countMonths).toFixed(2));
  return totalPayment;
}