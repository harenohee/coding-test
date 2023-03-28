// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
function solution(n) {
  // 루트 씌워서 정수가 되면 ok
  let temp = Math.sqrt(n);
  //   Number.isInteger(temp)
  if (temp % 1 === 0) {
    //Math.pow() : 인자 2개
    return Math.pow(temp + 1, 2);
  } // 양의 정수면 x+1의 제곱을 리턴
  // 정수임은 어떻게? % 1 === 0 이면 정수
  return -1;
}

solution(121);
