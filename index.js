//  3 ta son berilgan bular orasidan 3 ga karralilarining kopaytmasini topuvchi algorithm yozing?
//    1 - MASALA
// var number1 = 5;
// var number2 = 4;
// var number3 = 10;
// let result = number1 * number2 * number3;
// console.log(result);

//  3 xonali son berilgan. Uning raqamlari yig'indisini topuvchi algorithm yozing?
//  2 - MASALA
// let number = 746;
// let counter = 0;
// let yuzlar = Math.floor(number / 100);
// let onlar = Math.floor((number % 100) / 10);
// let birlar = number % 10;
// counter =  yuzlar + onlar + birlar;
// console.log(counter);i

//  3 xonali son berilgan. Uning toq raqamlari ko'paytmasini topuvchi algorithm yozing?
//  3 - MASALA
// let num = 357;
// let birlik = num % 10; 
// let onlik = Math.floor((num % 100) / 10); 
// let yuzlik = Math.floor(num / 100); 
// let kopaytma = 1;

// if (yuzlik % 2 !== 0) {
//   kopaytma *= yuzlik;
// }
// if (onlik % 2 !== 0) {
//   kopaytma *= onlik;
// }
// if (birlik % 2 !== 0) {
//   kopaytma *= birlik;
// }

// console.log(kopaytma);

//  3ta son berilgan ular orasidan 5 ga hamda 7 ga karralilarining sonini topuvchi algorithm yozing?
//  4 - MASALA
// let number1 = 25;
// let number2 = 57;
// let number3 = 123;
// let counter = 0;
// let result = 0;
// if (number1 % 5 === 0) {
//   counter++;
// }
// if (number1 % 7 === 0) {
// result += 1;
// }

// if (number2 % 5 === 0) {
//   counter++;
// }
// if (number2 % 7 === 0) {
//   result += 1;
// }

// if (number3 % 5 === 0) {
//   counter++;
// }
// if (number3 % 7 === 0) {
//   result += 1;
// }
// console.log("5 ga qoldiqsiz bo'linadigan sonlar: " + counter);
// console.log("7 ga qoldiqsiz bo'linadigan sonlar: " + result);

//  Ixtiyoriy harf berilganda uning unli yoki udosh ekanini aniqlovchi algorithm tuzing?
//  5 - NASALA
// let unli = 'A'; 
// if [('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'.indexOf(unli) !== -1)] {
//     console.log("Bu harf unli");
// } else {
//     console.log("Bu harf undosh");
//}
// Foydalanuvchidan 2ta son hamda bitta arifmetik operator qabul qiladigon hamda arifmetik operatorga qarab amal bajaradigon calculator yasang
//  6 - NASALA
// let number1 = +prompt("Birinchi sonni kiriting:");
// let operator = +prompt("Amalni kiriting (+, -, *, /):");
// let number2 = +prompt("Ikkinchi sonni kiriting:");
// number1 = parseFloat(number1);
// number2 = parseFloat(number2);
// let = result;
// if (operator === "+") {
//     result = number1 + number2;
//   } else if (operator === "-") {
//     result = number1 - number2;
//   } else if (operator === "*") {
//     result = number1 * number2;
//   } else if (operator === "/") {
//     result = number1 / number2;
//   } else {
//     result = "Noto'g'ri arifmetik operator";
//   }
//  console.log(result);
// 3 ta musbat son berilgan. Ushbu 3 ta sondan uchburchak yasash mumkin yoki mumkin emasligini aniqlovchi alhoritm yozing(geometriyaga oid).
//  7 - NASALA
// let num1 = 3; 
// let num2 = 8; 
// let num3 = 5;
// let sum = num1 + num2 + num3;

// if (num1 + num2 > num3) {
//   console.log("Uchburchak yasash mumkin");
// } else {
//   console.log("Uchburchak yasash mumkin emas");
// }
//  3 xonali son berilgan. Uning palindrom yoki palindrom emasligini tekshiruvchi algoritm yozing
//  8 - NASALA
