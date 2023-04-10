function solution(s) {
  if(s.length == 4 || s.length == 6){
    if(s.includes('e')) return false
    else if(isNaN(+s)) return false
    else return true
  }
  else return false
 }