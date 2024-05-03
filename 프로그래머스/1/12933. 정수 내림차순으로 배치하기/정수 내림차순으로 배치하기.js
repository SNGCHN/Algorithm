function solution(n) {
    // 정수 n을 문자열로 변환
    let str = n.toString();

    // 문자열을 배열로 변환하고 내림차순으로 정렬
    let sortedArray = str.split('').sort((a, b) => b - a);

    // 배열을 문자열로 결합
    let sortedStr = sortedArray.join('');

    // 문자열을 정수로 변환하여 반환
    return parseInt(sortedStr);
}
