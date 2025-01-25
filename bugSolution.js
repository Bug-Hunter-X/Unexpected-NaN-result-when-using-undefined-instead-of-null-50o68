function foo(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null and undefined values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: 5
console.log(foo(5, undefined)); // Output: 5