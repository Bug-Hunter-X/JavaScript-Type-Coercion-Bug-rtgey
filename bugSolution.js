function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Or throw an error
  }
  return a + b;
}

console.log(foo(1, '2')); // Output: NaN
console.log(foo('1', 2)); // Output: NaN
console.log(foo(1,2)); // Output: 3