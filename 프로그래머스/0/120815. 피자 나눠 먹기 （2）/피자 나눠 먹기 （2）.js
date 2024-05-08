function solution(n) {
    let i = 0; // 필요한 피자 판 수를 계산할 변수
    while (true) {
        i++; // 피자 판 수를 1씩 증가
        if ((6 * i) % n === 0) { // 6조각씩 i판이 n명으로 나누어 떨어지는지 검사
            return i; // 나누어 떨어지면 그때의 판 수를 반환
        }
    }
}