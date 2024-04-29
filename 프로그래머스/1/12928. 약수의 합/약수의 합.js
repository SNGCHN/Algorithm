function solution(n) {
    let divisorSum = 0; // 약수의 합을 저장할 변수 초기화
    
    // 1부터 n까지 반복하며 약수 확인
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorSum += i; // 나머지가 0이면 i는 n의 약수이므로 합에 추가
        }        
    }
    return divisorSum; // 계산된 약수의 합 반환
}
