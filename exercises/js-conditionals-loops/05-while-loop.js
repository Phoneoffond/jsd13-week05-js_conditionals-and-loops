// Exercise 05 — while loop
// ------------------------
// Implement countDigits(n): return how many digits are in the whole number n.
// Treat n as its absolute value (ignore a minus sign). For example:
//   countDigits(7)     -> 1
//   countDigits(100)   -> 3
//   countDigits(-4520) -> 4
//   countDigits(0)     -> 1   (zero counts as one digit)
//
// Use a while loop. Hint: repeatedly divide by 10 (Math.floor(n / 10)) and
// count how many times you can do that before reaching 0.

function countDigits(n) {
  
  n = Math.abs(n);

  
  if (n === 0) {
    return 1;
  }

  let count = 0;
 
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

// --- Tests (do not edit) ---
import { strictEqual } from "node:assert";

strictEqual(countDigits(7), 1);
strictEqual(countDigits(100), 3);
strictEqual(countDigits(-4520), 4);
strictEqual(countDigits(0), 1);
strictEqual(countDigits(999999), 6);

console.log("All tests passed ✅");
