const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const __lines = [];
rl.on('line', (line) => __lines.push(line));
rl.on('close', () => {
  const input = __lines.join('\n').trim();
  function solution() {
   const [A, B] = input.split(' ').map(Number);    
   return A / B;
  }

  console.log(solution());

});