//js可以不定義CLASS直接宣告一個object(Object Literal Declaration)
//c++不行
const person = {
  name: "bob",
  phone: "0999999999",
  address: "ABC city Str.169 no.4 6F",

  //methods(obj中的function)
  greet: function () {
    console.log(` hi, I'm ${this.name}`);
  },
  greet2: () => {
    console.log(` hi, I'm ${person.name}`); //箭頭函式不能用this
  },
};

//access obj
console.log(person.name);
console.log(person.address);
console.log(person);

//更改
//用const也可以改，因為const是不允許重新做assignment(賦值)
//但若變數為物件，改物件裡面屬性的值是可以
person.name = "steve";
console.log(person.name);

//新增
person.age = "20";
console.log(person);

person.greet();
person.greet2();
