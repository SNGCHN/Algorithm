function solution(n) {
    let i = 1; // 해당 입력된 값에 맞는 정수를 찾는 값, 0이 초기값이면 반환값이 0이 되니까 안됨
    let f = 1; // 팩토리얼 계산 값을 저장할 변수, n보다 커지면 멈추게 작동해야함 똑같이 초기값 0
    while (f <= n) {
        i++;
        f *= i;
    }
    return i-1;
}