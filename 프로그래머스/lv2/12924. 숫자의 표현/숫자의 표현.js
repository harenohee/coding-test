function solution(n) {
    let result=0;
    for(i=1; i<=n; i++){
        if(i%2==1 && n%i==0){
            result++
        }
    }
    return result
    
}