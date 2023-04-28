function solution(n, m) {
    const answer = [];
  
    if(n>m) {
        let temp = n;
        n = m;
        m = temp;
    }
    let a = n
    let b = m;
//     최대공약수
    while(b%a >= 1){
        let rest = b%a;
        if(rest ==0) break;
        b = a 
        a = rest; 
    }
//     최소공배수
    let lcm = n*m / a
    answer.push(a, lcm)
    return answer
}