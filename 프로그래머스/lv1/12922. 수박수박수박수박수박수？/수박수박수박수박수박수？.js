function solution(n) {
    const odd = "박"
    const even = "수"
    let arr=[]
    for(i=0; i<n; i++){
        i%2==0 ? arr.push(even) : arr.push(odd)
    }
    return arr.join("")
}