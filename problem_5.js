const input = "the simplestThings in LIFE are alwaysThe best";
let temp = "";
let arr = [];

const makeProperString = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      temp += input[i];
    }
    if (
      (input[i] == input[i].toLowerCase() &&
        input[i + 1] == input[i + 1]?.toUpperCase()) ||
      input[i] == " "
    ) {
      arr.push(temp);
      temp = "";
    }
  }
  return arr.join(" ").toLowerCase().split(" ");
};
const properString = makeProperString(input);
// console.log(properString);
for (let i = 0; i < properString.length; i++) {
  properString[i] =
    properString[i].substring(0, 1).toUpperCase() +
    properString[i].substring(1);
}
const output = properString.join(" ");
console.log(output);
