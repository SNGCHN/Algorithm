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

function solution(input) {
  let word = input.trim();
  let answer = word + "??!";
  return answer;
}