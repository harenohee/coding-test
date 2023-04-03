function solution(arr, divisor) {
    
   const answer = arr.sort((a,b) => a-b).filter(i => i%divisor ===0);
    if(answer.length == 0) {
        answer.push(-1);
    } 
    return answer;
}