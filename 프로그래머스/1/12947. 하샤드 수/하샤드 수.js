function solution(x) {
    const sumOfDigits = x.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);

    return x % sumOfDigits === 0;
}
