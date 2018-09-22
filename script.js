var num = 1;
var stringNum = "2";
var stringNotNumber = "Hello world"
console.log(Number(stringNotNumber)); //Nan

var constructorNum = Number(stringNum);

console.log(num + stringNum); //12
console.log(num + Number(stringNum)); //3
console.log(num + constructor);

var array1 = [ ];
var array2 = [ ];

console.log(array1 + array2);