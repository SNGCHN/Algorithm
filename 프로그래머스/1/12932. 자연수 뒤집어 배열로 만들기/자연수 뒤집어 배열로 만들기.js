function solution(n) {
    var answer = [];
    var s = n.toString();  // 숫자 n을 문자열로 변환
    for (var i = s.length - 1; i >= 0; i--) {
        answer.push(parseInt(s[i]));  // 각 자리 숫자를 정수로 변환하여 배열에 추가
    }
    return answer;
}
