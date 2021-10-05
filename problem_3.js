input = [2, 3, 0, 5, 9, 8, 7, 6, 3];
let out = [];
let temp1;
let temp2;
for (let i = 0; i < input.length; i++) {
  temp1 = input[0] + input[4] + input[8];
  temp2 = input[2] + input[4] + input[6];
}
out.push(temp1, temp2);
console.log(out);
