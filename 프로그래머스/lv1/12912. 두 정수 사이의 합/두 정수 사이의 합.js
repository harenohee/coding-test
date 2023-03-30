function solution(a, b) {
    let sum = 0;
    if(a===b) return a;
    if(a-b < 0){
    for(i=a; i<=b; i++){
        sum += i;
    }
    }
    else{
          for(i=b; i<=a; i++){
        sum += i;
    }
    
    }
    return sum;
}