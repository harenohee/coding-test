function solution(board) {
  var answer = 0;
  let newArr = [];
  let arr;
  //   const one = 1;
  //오른쪽 왼쪽 대각선 위 아래를 모두 1로 바꿔준다
  // 1이 있는지 검사? 있으면~ 양 옆을 1로 바꿔줌
  // 인덱스 번호들을 가져와야 하나?
  // splice() 사용해서 값을 바꿔?

  for (let i = 0; i < board.length; i++) {
    arr = board[i].map((elem) => {
      return elem;
    });
    console.log("arr", arr);

    newArr.push(arr);
  }
  // console.log(newArr);
  //   for (let i = 0; i < board.length; i++) {
  //       var idx = board[i].indexOf(one);
  //       while(idx != -1){
  //         idx = board[i].indexOf(one, idx+1);

  //       }
  //     arr = board[i].map((item) => {

  //     });

  //     newArr.push(arr);
  //   }

  return answer;
}

board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0], //3,2//3,3
  [0, 0, 0, 0, 0],
];

solution(board);
