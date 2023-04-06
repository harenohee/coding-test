function solution(n) {
  const str = String(n);
  const arr = Array.from(str);
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return sum;
}