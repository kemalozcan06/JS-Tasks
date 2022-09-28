// Задание 2
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)

let user = prompt('Your name');
console.log('Hello, ' + user);

alert('This is alert');

alert('Hello, ' + user);

confirm('Are you sure that you want close the site?');

// Задание 3
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

let number1 = prompt('Insert number');
let number2 = prompt('Insert power of the number');
alert(number1 ** number2)