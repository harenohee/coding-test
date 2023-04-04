function solution(phone_number) {

    let temp = phone_number.split("").map(i=>"*").join("").slice(0,-4);
    let rear = phone_number.slice(-4);

    
    return temp.concat(rear);
}