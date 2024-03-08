const my_array = [1, "2", true, [], { name: "steben" }];

//console.log(typeof my_array);
//console.log(my_array[-1]);

my_array.push("123");
//console.log(my_array);

my_array.pop();
//console.log(my_array);

my_array.unshift("head");
//console.log(my_array);

my_array.shift();
//console.log(my_array);

// for (let i = 0; i < my_array.length; i++) {
//   console.log(my_array[i]);
// }
// for (const n of my_array) {
//   console.log(n);
// }

// my_array.forEach((n) => {
//   console.log(n);
// });

const arr = [1, 3, 7, 100];

//map,參數放函數
const double = arr.map((n) => 2 * n);
const strArr = arr.map((n) => n.toString());

const doubleOdds = arr.map((n) => {
  if (n % 2 !== 0) {
    return n * 2;
  }
  return n;
});

console.log(double);
console.log(strArr);
console.log(doubleOdds);

//filter
const odds = arr.filter((n) => n % 2 !== 0);
const greaterThan50 = arr.filter((n) => n > 50);
console.log(odds);
console.log(greaterThan50);

//array methods不會改變原本的array喔
console.log(arr);
