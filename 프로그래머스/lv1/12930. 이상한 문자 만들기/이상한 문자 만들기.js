function solution(s) {
  const arr = s.split(" ");
  const result = arr.map((i) => {
    let str = ""
      for(idx=0; idx<i.length; idx++){
          if (idx % 2 == 0) {
        // i = i.replace(i[idx], i[idx].toUpperCase());
              str += i[idx].toUpperCase()
      }
          if (idx % 2 == 1) {
        // i = i.replace(i[idx], i[idx].toLowerCase());
              str += i[idx].toLowerCase()     
      }
}
    return str;
  });
    
  return result.join(" ");
}

