const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const __lines = [];
rl.on("line", (line) => __lines.push(line));
rl.on("close", () => {
  const input = __lines.join('\n').trim();

  const solution = (input) => {
    const N = Number(input.trim());

    let result = "";

    for (let i = 1; i <= N; i++) {
      result += "*".repeat(i) + "\n";
    }

    console.log(result);
    };

  const __result = solution(input);
  if (__result !== undefined) {
    if (Array.isArray(__result)) console.log(__result.join('\n'));
    else console.log(String(__result));
  }
  process.exit();
});