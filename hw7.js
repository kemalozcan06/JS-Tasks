// Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:
// Math.round(x)
// Math.ceil(x)
// Math.floor(x)

// В комментариях к каждой строке напишите, как работают эти округления.

console.log(Math.round(5.4))
console.log(Math.round(5.5)) // если x < 5  =>  округляется к меньшему 
console.log(Math.round(5.6)) // если x >= 5  => округляется к большому

console.log(Math.ceil(5.4))
console.log(Math.ceil(5.5)) // в люьом случии округляется к большему
console.log(Math.ceil(5.6)) 

console.log(Math.floor(5.4))
console.log(Math.floor(5.5)) // в любом случии округляется к меншему
console.log(Math.floor(5.6)) 

// Задание 2

// Выведите в консоль фразы в 2 строки:

// Сегодня 27 октября 2022 (здесь будет ваша дата) - используйте options для вывода месяца словом

// 19 часов 20 минут (здесь будет ваше время) - используйте шаблонную строку, в которую подставьте значения с помощью методов getHours() и getMinutes()

let date = new Date();
let options = {
  day:"numeric",
  month: "long",
  year: "numeric",
  
};

console.log(` Сегодня ${date.toLocaleString("ru-RU",options)}
 ${date.getHours() } часов ${date.getMinutes()} минут `);
