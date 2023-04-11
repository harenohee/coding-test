function solution(price, money, count) {
    let sum=0;
    for(i=1; i<=count; i++){
        sum += price * i;
    }
    if(sum-money > 0) return sum-money
    if(sum-money <= 0) return 0
}