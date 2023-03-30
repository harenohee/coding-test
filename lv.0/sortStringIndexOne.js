function solution(strings, n) {
  //   const newArr = strings.map((item) => item.charAt(n)).sort(); //[ 'a', 'e', 'u' ]

  const newArr = strings
    .map((item) => {
      temp = item.substring(n, n + 1) + item;
      return temp;
    })
    .sort()
    .map((item) => item.slice(1));

  // 문자열을 붙였다가.. 잘라요..

  //   const result = [];
  //   result.push(strings.find((idx) => idx.newArr));

  return newArr;
}

strings1 = ["sun", "bed", "car"];
strings2 = ["abce", "abcd", "cdx"];
const n1 = 1;
const n2 = 2;

console.log(solution(strings1, n1));
console.log(solution(strings2, n2));
