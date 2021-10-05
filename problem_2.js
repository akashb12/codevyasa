const input = {
  fName: "Name 1",
  lName: "L Name 1",
  obj: {
    fName: "Name 2",
    lName: "L Name 2",
    obj: {
      fName: "Name 3",
      lName: "L Name 3",
    },
  },
};
const output = {};
output.f_name = input.fName;
output.l_name = input.lName;
output.obj = {
  f_name: input.obj.fName,
  l_name: input.obj.lName,
  obj: { f_name: input.obj.obj.fName, l_name: input.obj.obj.lName },
};
console.log(output);
