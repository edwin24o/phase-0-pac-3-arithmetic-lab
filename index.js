function add(a, b) {
return a + b;
}
function subtract(b, a) {
return b - a;
}
function multiply(a, b) {
return a * b;
}
function divide(a, b) {
return a / b;
}
number = 10;

function add3() {
    return (number += 3);
}

function increment(n) {
    return ++n;
  }   
  function decrement(n) {
    return --n;
  }
  function makeInt(n) {
    let parsedInt = parseInt(n, 10);
    if (isNaN(parsedInt)) {
        return NaN;
    } else {
        return parsedInt;
    }
}
function preserveDecimal(n) {
    let parsedFloat = parseFloat(n);
    if (isNaN(parsedFloat)) {
        return NaN;
    } else {
        return parsedFloat;
    }
}