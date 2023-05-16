function solution(arr)
{
    const copy = arr.filter((ele, idx, source)=>
        ele != source[idx+1]
    )
    return copy
}