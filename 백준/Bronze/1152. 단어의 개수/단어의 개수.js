const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (input) => {
  const result = solution(input);
  console.log(result);
  rl.close();
});

const solution = (input) => {
  let str = input.trim();

  if (str.length === 0) {
    return 0;
  }

  let words = str.split(" ");

  return words.length;
};