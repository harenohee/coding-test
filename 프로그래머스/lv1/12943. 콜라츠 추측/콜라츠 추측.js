function solution(num) {

    for(i=0; i<=500; i++){
        if(num === 1) return i;
        else{
        if(num%2===1){
            num = num*3+1
        }
        else{
            num = num/2;
        } 
        }
    }
    return -1;
}