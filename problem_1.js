const input = "My name is Ram. I am Ram Kumar. Ram, Please come here";
const arr = input.match(/[a-zA-Z]+/g);
count = {};
for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]]) {
    count[arr[i]] += 1;
  } else {
    count[arr[i]] = 1;
  }
}
console.log(count);
