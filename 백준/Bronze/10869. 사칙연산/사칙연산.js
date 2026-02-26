const fs = require('fs');

// 백준 제출용 (리눅스 환경)
const input = fs.readFileSync(0, 'utf8').trim();

const [A, B] = input.split(/\s+/).map(Number);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);