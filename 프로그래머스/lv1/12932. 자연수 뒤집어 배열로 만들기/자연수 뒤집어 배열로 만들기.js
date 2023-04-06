function solution(n) {
  var answer = String(n)
    .split("")
    .map((i) => Number(i))
    .reverse();

  return answer;
}