// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// as-is
function solution(n) {
  // sorting
  let temp = String(n)
    .split("")
    .map((i) => i)
    .sort((a, b) => b - a);

  let answer = temp.join("");
  return Number(answer);
}
solution(118372);

// 개선한 코드
function solution(n) {
  // sorting
  let temp = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +temp;
}
