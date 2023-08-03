function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 5));

let array = ["AA", "BB", "CC", "BB", "AA", "AA"];

let newarray = array
  .filter((el, index) => {
    return array.indexOf(el) !== index;
  })
  .map((item, i) => {
    return array.lastIndexOf(item);
  });
console.log(newarray);
