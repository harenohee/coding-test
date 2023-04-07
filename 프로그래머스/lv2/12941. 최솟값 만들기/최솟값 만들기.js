function solution(A,B){
  // A 오름차순 정렬 B 내림차순 정렬
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    
  return A.reduce((acc,_,i)=> acc += A[i]*B[i],0)
}