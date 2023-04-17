function solution(n) {
    let numN = Number(n.toString(2).split("").sort().join("")).toString().length
    let result = 0;
    while(1){
        n++;
        result = Number(n.toString(2).split("").sort().join("")).toString().length
        if(numN === result) return n
    }
    return n
}