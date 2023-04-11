function solution(s) {
    let zero = 0;
    let count =0;
    while(s!="1"){
    const arr = s.split("").filter((i) => {
    if (i == "0") zero++;
    return i != "0";
  })
     //     제거 후 길이
  let len = arr.join("").length;
  const rest = [];
    
  while (len > 1) {
    rest.push(len % 2); 
    len = Math.floor(len / 2);
  }
    rest.push(len);
    count++;
    s = rest.reverse().join("")
    }
    return [count, zero]
}


