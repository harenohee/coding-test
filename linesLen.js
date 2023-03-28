function solution(lines) {
  // [start, end]
  //먼저 2차원 배열안의 배열의 start끼리 비교하고
  // 작은 순으로 정렬
  // sort 이용
  lines.sort((a, b) => a[0] - b[0]);
  //출력
  console.log("lines", lines);

  // 만약 배열 하나가 다른 두 배열 보다 크면
  // 중간 값들로 리턴

  for (item of lines) {
  }

  //   if (start < end) {
  //     end - start;ß
  //   }
  //   return;
  //

  return 0;
}

lines = [
  [0, 2],
  [-3, -1],
  [-2, 1],
];
solution(lines);
