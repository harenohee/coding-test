function solution(s) {
  const P = "p";
  const Y = "y";
  let pSum = 0;
  let ySum = 0;
  //   console.log(s.toLowerCase().includes(P));
  const arr = Array.from(s);
  arr.forEach((i) => {
    if (i.toLowerCase() === P) {
      pSum += 1;
    }
    if (i.toLowerCase() === Y) {
      ySum += 1;
    }

    
  });
  if (pSum !== ySum) return false;
  else if (pSum === ySum) return true;
  else if (pSum === 0 && ySum === 0) return true;
}