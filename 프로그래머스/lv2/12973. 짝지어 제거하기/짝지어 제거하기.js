function solution(s)
{
 
    const arr = [];
    
    for(let i of s){
        arr.push(i);
        if(arr[arr.length-1]==arr[arr.length-2]) {
            arr.pop()
            arr.pop()
        }
    }
    return arr.length ==0 ? 1 : 0
  //   for(i=0; i<s.length; i++){
  //       if(s[i]==s[i+1]){
  //           s = s.replace(s[i],"")
  //           s = s.replace(s[i],"")
  //           i = 0;
  //       }
  //       if(s.length == 0) return 1;
  //   }
  // return 0
}
