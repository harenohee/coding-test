function solution(arr) {
    const val = Math.min(...arr);
    
    arr.splice(arr.indexOf(val),1);
    if(arr.length==0) arr.push(-1);
    return arr;
}