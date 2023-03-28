function solution(dots) {
  //기울기를 담아둘 배열
  const newArr = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; i++) {
      //x좌표

      const temp = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);
      //   console.log("기울기", temp);

      if (newArr.includes(temp)) {
        return 1;
      }
      newArr.push(temp);
    }
  }
  return 0;
}
//   for (let i = 0; i < dots.length; i++) {
//     [x1, y1] = dots[i];
//     [x2, y2] = dots[i + 1];

//     console.log(Math.abs(x1 - x2));
//     console.log(Math.abs(y1 - y2));
//   }

dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];
console.log(solution(dots));
