function solution(s){
    let cnt = 0;
    if(s.length === 1 || s[0] === ")") return false;
    
    for(i=0; i<s.length; i++){
        if(s[i]==="(") cnt++;
        else cnt--;
        if(cnt<0) return false;
    }
    if(cnt!==0) return false
    return true
    
}
