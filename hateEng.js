function solution(numbers) {
  var answer = 0;
  //객체로?
  //문자열을 쪼개서
  //인덱스오브로 찾고
  //밸류값을 리턴?

  //includes 로 문자열 찾고
  //true면~ 해당 num을 반환

  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (item of arr) {
    console.log(item);

    if (numbers.includes(item)) {
      console.log("찾음");
      //해당 인덱스 값으로 대치
      //numbers = 이걸안써서 결과가 계속 안나왔음..
      numbers = numbers.replace(item, arr.indexOf(item).toString());
    }
  }
  console.log("numbers: ", numbers);
  //   const obj = {
  //     one: 1,
  //     two: 2,
  //     three: 3,
  //     four: 4,
  //     five: 5,
  //     six: 6,
  //     seven: 7,
  //     eight: 8,
  //     nine: 9,
  //     zero: 0,
  //   };

  return answer;
}

numbers = "onefourzerosixseven";
solution(numbers);
