// language basics
// 1
//  let char = 3;
//  console.log(char)

// 2
// let a = 10;
// let b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// 3
// let c = 15;
// let d = 2;
// let result = c + d;
// console.log(result);

// 4
// let a = 10;
// let b = 2;
// let c = 15;
// console.log(a + b + c);

// 5
// let a = 17;
// let b = 10;
// let c = a - b; 
// let d = 7;
// let result = c + d;
// console.log(result)

// 6
// let str = "Hello, World!";
// console.log(str)

// 7
// let str1 = "Hello,";
// let str2 = "World!";
// console.log(str1 + " " + str2)

// 8
// let str1 = "Hello,";
// let str2 = "Vladyslav!";
// console.log(str1 + " " + str2)
// console.log(str1 + " " + `${"Vladyslav!"}`)

// 9
// let age = 31;
// console.log(`${"I have"}` + " " + age + " " + `${"year"}`)

// 10
// let a = prompt("Give me your name");
// let b = alert(a)

// 11
// let a = prompt("Give me number");
// let b = alert(a * a)

// 12
// let str = "abcde";
// console.log(str[0], str[2], str[4])

//13
// let char = "12345" ; 
// console.log(char[0] * char[1] * char[2] * char[3] * char[4])

// let result = 1;
// for(let i = 0; i < char.length; i++){
//   result =  result * char[i];
//   console.log(result)
// }

// 14
// let secInMinutes = 60;
// let secInHour = 60 * secInMinutes;
// let secInDay = secInHour * 24;
// let secInMonth = secInDay * 30;
// console.log(secInMinutes, secInHour, secInDay, secInMonth)

// 15
// let hour = 15;
// let minutes = 21;
// let second = 30;
// alert(hour + ":" + minutes + ":" + second)

// 16
// let a = 7;
// let b =  a * a;
// alert(b)

//  SEcond Part Задачи на основы работы с массивами и объектами
// 1
// let arr = ['a', 'b','c', 'd'];
// console.log(arr)
// 2
// console.log(arr[1], arr[2])
// 3
// console.log(`${arr[0]} + ${arr[1]} , ${arr[2]} + ${arr[3]} `)
// 4
// let arr1 = [2, 5, 3, 9];
// let ressult = ((arr1[0] * arr1[1]) + (arr1[2] * arr1[3]));
// console.log(ressult);
// 5
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.c, obj['c'])
// 6
// let obj1 = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj1.Коля, obj1.Петя)
// 7
// let arr2 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// console.log(arr2[1][0])
// 8
// let obj2 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj2.js[0])

// 9
// let obj3 = {
// 	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
// 	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//   day: [1, 2, 3, 4, 5, 6, 7]
// }
// let lang = prompt('Chose language : ru / en');
// let day = prompt('Chose day number: 0 - 7 ')
// if (lang == 'ru' || day == 0 - 7){
//   console.log(obj3.ru[day])
// } else if (lang == 'en' || day == 0 - 7) {
//   console.log(obj3.en[day])
// }else{
//   alert('chose lang and day numberen')
// }



// 1. задача /Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function calc1(num1, num2) {
    let sum = 0 ;
        // while(num1 <= num2){
        //     sum = sum + num1;
        //     num1++
        // }
        for ( ; num1 <= num2; num1++ ) {
            sum = sum + num1;
        }
    return sum;
}

// 2. задача /Запросить 2 числа и найти только наибольший общий делитель.

function calc2(num1, num2){
        if (!num2) {
          return num1;
        }
      
    return calc2(num2, num1 % num2);
}

// 3 Запросить у пользователя число и вывести все делители этого числа.

function calc3(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++){
      if (!(num % i)) {
        sum += i;
      }
    }
    console.log(sum);
  }

//  4 Определить количество цифр в введенном числе.

function calc4(num){
    let i = 0
    for(; num > 1; i++){
        num = num / 10;
    }
    return i ;
}

// 1а3у34к4п5ав49812аац32 выделить все цифры и посчитать их сумму 
function sumDigits(str) {
   let sum = 0;
   for (let i = 0; i < str.length; i++) {
    if (str[i] <= '9' && str[i] >= '0') {
      let num = Number(str[i]);
      sum += num;
    }
   } 
  //   for( let i in str){
  //     if( parseInt(str[i]) ){
  //       num += str[i]
  //     }
  //   }
  return sum;
}

// [0,1,20,0,0,34,15,0,1,13,0,0,9]  убрать все 0 и вернуть новый массив без 0
function removeZeros(arr) {
  let newArr = []; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
      // newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0 ; i--) {
    if (arr[i] !== 0) {
      // newArr[newArr.length] = arr[i];
      newArr.push(arr[i]); 
    }
  }
  return newArr;
}

// 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
// раззделить строку на слова
// записать слова в массив в обратном порядке 
// 1. вернуть массив со словами в обратном порядке
// Результат ['elit.', 'adipisicing', 'consectetur',  'amet', 'sit', 'dolor', 'ipsum', 'Lorem']

function splitString(string) {
// return str.split(' ').reverse()
return newReverse(buildArray(string));
}

function buildArray(string) {
   let array = [];
   let characterAccumulator = '';
   let wordIndexInArray = 0;
   
   for (let i = 0; i < string.length; i++) {
      if (string[i] != ' ') {
         characterAccumulator += string[i];
      } else {
         array[wordIndexInArray++] = characterAccumulator;
         characterAccumulator = '';
      } 
      if (i == string.length - 1) {
         array[wordIndexInArray] = characterAccumulator;
      }
   }
   return array;
}

function newReverse(array) {
   let newArray = [];
   for (let i = array.length - 1, j = 0; i >= 0 ; i--, j++) {
      newArray[j] = array[i]; 
   }
   return newArray;
 }