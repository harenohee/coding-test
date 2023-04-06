function solution(x) {
  let val = x;
  let sum = 0;
  for (i = 0; i < String(x).length; i++) {
    sum += +String(x).split("")[i];
  }
  if (val % sum === 0) return true;
  return false;
}