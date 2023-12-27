function solution(d, budget) {
    let answer =0
    d.sort((a,b)=> a-b)
    d.forEach((i)=>{
      
        budget = budget - i;
        answer++;
            if(budget < 0){
                answer --;
              return;
            }
    })
    
    return answer;
}