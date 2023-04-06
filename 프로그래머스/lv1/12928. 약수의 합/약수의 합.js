function solution(n) {
  // n보다 작은 정수로 n을 나누어 떨어지면 배열에 저장?
    // let arr = [];
    let sum=0;
  for (i = 0; i <= n; i++) {
    if (n % i == 0) {
      // arr.push(i);
        sum += i;
    }
  }
  // const result = arr.reduce((prev, cur) => prev + cur);
  return sum;
}