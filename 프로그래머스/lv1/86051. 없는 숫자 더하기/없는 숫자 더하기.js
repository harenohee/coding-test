function solution(numbers) {
   
   const sum = Array(9).fill().map((_,i)=>i+1).reduce((acc,cur)=>acc+cur);
    const numbers_sum = numbers.reduce((acc,cur)=>acc+cur);
    
    return sum-numbers_sum;
}