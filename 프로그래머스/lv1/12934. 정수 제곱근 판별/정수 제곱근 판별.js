function solution(n) {

  let temp = Math.sqrt(n);
  if (temp%1 ===0) {
    return Math.pow(temp + 1,2);
  } 
 
  return -1;
}