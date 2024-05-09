// 1. join 메서드로 배열 요소를 합체
// 2. split 메서드 인자를 문자열 7로 해서 7을 기준으로 나눈다
// 3. 배열의 개수에 -1한 값이 7의 개수임

function solution(array) {
    return array.join("").split("7").length-1;
}