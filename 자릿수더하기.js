// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
// function solution(n) {
//   const str = String(n);
//   const arr = Array.from(str);
//   const result = arr.reduce((prev, cur) => {
//     return prev + cur; 
//   });
//   return result;
// }
// solution(20);

function solution(n) {
  const str = String(n);
  const arr = Array.from(str);
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }

  return sum;
}
