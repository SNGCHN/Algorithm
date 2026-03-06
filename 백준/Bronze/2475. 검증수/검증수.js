const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const __lines = [];
rl.on("line", (line) => __lines.push(line));
rl.on("close", () => {
  const input = __lines.join('\n').trim();

  const solution = (input) => {
    const nums = input.trim().split(/\s+/).map(Number);

    let sum = 0;
    for (let n of nums) {
      sum += n * n;
    }

    console.log(sum % 10);
  };

  const __result = solution(input);
  if (__result !== undefined) {
    if (Array.isArray(__result)) console.log(__result.join('\n'));
    else console.log(String(__result));
  }
  process.exit();
});