let str =
  "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=0d88faa4d3664036b7e36dea73e45cde&thumb=Y";
// console.log(str.split("atchFileId=", 2));
str = str.split("atchFileId=");
str = str[1].split("&");
console.log(str[0]);
