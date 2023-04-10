function solution(left, right) {
   const arr = [];
    for(i=left; i<=right;i++){
        arr.push(i);
    }
   let sum =0;
    
   for(i=0; i< arr.length; i++){
        let count= 0;
       for(j=1; j<=arr[i]; j++){
           if(arr[i]%j==0) count++
       }
        if(count%2==0) sum += arr[i]
        else sum -= arr[i]
   }
 return sum;

 
  
}