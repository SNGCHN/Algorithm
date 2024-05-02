// 1. n이 x의 제곱인지 판단
// 2. 제곱근 메서드 sqrt로 판단하기
// 3. 맞다면 x+1해서 제곱해서 반환하기
// 4. 아니라면 -1로 반환하기
function solution(n) {
    var sqrtN = Math.sqrt(n);  // n의 제곱근 계산
    if (Number.isInteger(sqrtN)) {  // 제곱근이 정수인지 확인
        return Math.pow(sqrtN + 1, 2);  // (제곱근 + 1)의 제곱 반환
    }
    return -1;  // n이 양의 정수 x의 제곱이 아니면 -1 반환
 }