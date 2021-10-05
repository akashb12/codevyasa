const arr = [1, 4, 5, 3, 9, 90];
const out = arr.sort((a, b) => {
  return b - a;
})[1];
console.log(out);
