// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

// Примеры результатов вызова функции:

// sum(2, 4); // 6

// sum('d', 4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

// function sum(a, b) {
//     if (typeof a === "number" && typeof b === "number" && arguments.length == 2) {
//         console.log(a + b)
//     } else if (arguments.length !== 2) {
//         console.log(` Введите два параметра`)
//     } else {
//         console.log(`Введенные данные не являются числами`)
//     }
// }
// console.log(sum(2))

// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"

// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100

// square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
// function square(a) {
//     if (a = "Nan") {
//         console.error(`Функция "square" не может быть вызвана без аргумента`)
//     } else {
//         console.log(a * a)
//     }
// }
// console.log(square());

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

// Написать функцию в стрелочном синтаксисе.

// let getRandomInteger = (min, max) => {
//     let result = Math.floor(Math.random() * (max - min)) + min;
//     return result
// }

// let guessNum = (num) => {
//     let randomNum = getRandomInteger(1, 10)
//     if (num < 1 || num > 10) {
//         console.log(`Enter a number bigger then 1 but smaller then 10`)
//     } else if (num === randomNum) {
//         console.log("Вы выиграли")
//     } else {
//         console.log(`Вы не угадали, ваше число -  ${num},  а выпало число ${randomNum}`)
//     }
// }
// console.log(guessNum(5))

// Задание 4

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

// let arr = [5, 4, 3, 8, 0];
// let newArr = []
// filterFor = (arr, a) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= a) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(filterFor(arr, 5))

// Задание 5

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

// array = [1, 2, 3, 4, 5]

// function copyArr(arr) {
//     newArr = arr.map(item => { return item })
//     return newArr
// }
// console.log(copyArr(array))

// Задание 6

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

function sumObjectValues(someObject) {
  let sum = 0;
  for (let property in someObject) {
    if (typeof someObject[property] === "number") {
    sum += someObject[property]
    }
  }
  return sum
}
console.log(sumObjectValues(objectWithNumbers));
