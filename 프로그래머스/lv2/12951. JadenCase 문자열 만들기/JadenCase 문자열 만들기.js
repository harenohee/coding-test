function solution(s) {

    const arr = s.toLowerCase().split(" ").map((i)=>{
       const first = i.substring(0, 1).toUpperCase();
        
       return first.concat(i.substring(1))
    })

    return arr.join(" ")

}