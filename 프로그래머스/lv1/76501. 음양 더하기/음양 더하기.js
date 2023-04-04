function solution(absolutes, signs) {
  const result = absolutes.map((ele, idx)=>{
     return signs[idx] ? ele : -(ele)
  }).reduce((acc, cur)=> acc+cur);
  return result;
}