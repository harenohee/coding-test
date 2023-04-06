function solution(arr) {
  let sum=0;
    let avg = 0;
  arr.forEach((i) => {
    sum += i;
  });
  avg = sum / arr.length;
  return avg;
}