
function solution(n) {
  // n%x === 1
  // n-1 % x === 0
  for (i = 2; i <= n; i++) {
    if ((n - 1) % i === 0) {
      return i;
    }
  }
}