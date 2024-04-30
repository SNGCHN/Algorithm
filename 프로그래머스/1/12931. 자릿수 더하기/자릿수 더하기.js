//어려워서 자연어로 의사코드로 작성 후 문제 풀이
//1. 각 자리수에 대한 값을 저장하는 sum 변수 선언
//2. 반복문?과 Math.floor를 통해 각 자리수 구하기
//3. sum 변수에 저장후 반환

function solution(n) {
    let sum = 0;
    for (; n > 0; n = Math.floor(n / 10)) {
        sum += n % 10;
    }
    return sum;
}