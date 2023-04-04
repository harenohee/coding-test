function solution(absolutes, signs) {
  const result = absolutes.reduce((acc, cur, idx)=> acc + (signs[idx] ? cur: -cur),0)
  return result;
}