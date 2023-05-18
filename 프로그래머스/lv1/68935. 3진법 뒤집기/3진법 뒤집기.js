function solution(n) {
    const num3 = n.toString(3)
    const num_reverse = num3.split('').reverse().join("")
    return parseInt(num_reverse, 3)
    }