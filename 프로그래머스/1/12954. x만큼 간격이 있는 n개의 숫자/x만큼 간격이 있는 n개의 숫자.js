// 1. 함수 solution 매개변수로 x와 n을 받는 함수다.
// 2. answer는 배열로 선언을 한다.
// 3. for문은 n의 숫자만큼 반복해야하고, 배열의 첫 요소는 x값부터 시작하기 때문에 i는 1로 둔다
// 4. 배열 메서드 push로 반복할 때마다 배열에 요소를 넣는다.

function solution (x,n) {

    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}