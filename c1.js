//判斷質數(early return)
function IsPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sum(a, b) {
  return a + b;
}

// 箭頭函式function寫法
// 使用時機:當作引數傳入
const sum2 = (a, b) => {
  return a + b;
};

//內容只有一行且要直接return表達式的話，可以省略大括號
const sum3 = (a, b) => a + b;

//函數可以當引數傳入
function PrintResult(x, y, fn) {
  console.log(`Result: ${fn(x, y)}`); //不是''是``
}

PrintResult(10, 11, sum);
PrintResult(10, 11, (a, b) => a + b); //箭頭函式function寫法，當作引數傳入
