// Задание 1
// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let user = 'hidden';
if (user == 'hidden') {
    user = 'visible'
} else {
    user = 'hidden'
}
console.log(user);


// Задание 2

// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let number = 5
let message = (number == 0) ?
    alert(number = 1) :
    number < 0 ?
    alert('less then zero') :
    (number > 0) ?
    alert(number * 10) :
    console.log(number)



// Задание 3
// Запросите у пользователя число и запишите его в переменную. 

// (Не забывайте, что от пользователя мы всегда получаем строку).

// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, то результат будет '0', если больше -  '1'. Выведите результат в консоль.

// Выполните это задание, используя тернарный оператор (: ?)

let number = prompt('Insert number')
let message = (number < 5) ?
    alert('0') :
    (number > 5) ?
    alert('1') :
    console.log(message);



// Задание 4
// Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел (наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел

let number1 = prompt('Insert first number');
let number2 = prompt('Insert second number');
if (number1 > number2) {
    alert('Number ' + number1 + ' Is bigger')
} else if (number1 < number2) {
    alert('Number ' + number2 + ' Is bigger')
} else if (number1 == number2) {
    alert('The numbers are equal')
}


// Задание 5
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2. Обе переменные запрашиваем у пользователя, ответ выводим в консоль.
let num1 = prompt('Insert first number');
let num2 = prompt('Insert second number');
if (num1 % num2 == 0) {
    alert('Yes, ' + num1 + ' is dividable by ' + num2)
} else {
    alert('No ' + num1 + ' is not dividable by ' + num2)
}


// Задание 6



// Запросить у пользователя средний балл, записать в переменную.

// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!", если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).

let mark = prompt("Твой средний балл?");
if (mark <= 4) {
    alert("Двоечник, иди учись!")
} else if (mark > 4 && mark < 9) {
    alert("Неплохо, но давай еще поднажмем!")
} else if (mark >= 9) {
    alert("Ого, да ты настоящий отличник!")
}


// Задание 7
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:

// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

let mark = prompt("What is your mark for the exam?");
let project = prompt("How many projects have you done?");
if (mark >= 90 || project >= 10) {
    alert("Your average mark is 100!")
} else if (mark >= 75 & mark < 90 & project >= 5 & project < 10) {
    alert("Your average mark is 90!")
} else if (mark > 50 & mark < 75 & project >= 2 & project < 5) {
    alert("Your average mark is 75!")
} else {
    alert("Your mark is 0")
};


// Задание 8
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt. Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

let rentPrice = 40;
let bigDiscount = 50;
let smallDiscount = 20;
let rentDays = prompt("For how many days will you rent this car?")
if (rentDays >= 7) {
    alert("Your renting fee in total is " + ((rentPrice * rentDays) - bigDiscount) + "$")
} else if (rentDays >= 3 & rentDays < 7) {
    alert("Your renting free in total is " + ((rentPrice * rentDays) - smallDiscount) + "$")
};


// Задание 9
// Создать переменную и записать в нее число, например 10.

10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль


for (let num = 10; num <= 20; num++) {
    console.log(num)
}


// Задание 10
// Увеличивая счетчик цикла на 2, нужно 5 раз:
// - запрашивать у пользователя ввод числа
// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

for (let num = 0; num < 10; num += 2) {
    let askedNumber = prompt("Insert number")
    if (askedNumber == 10) {
        console.log("It equals 10")
    } else {
        console.log("Its does not equal 10")
    }
}


// Задание 11
// Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...

// * Задавать количество чисел, которые нужно вывести, при помощи функции prompt.

let insertedNum = prompt("Insert number");
for (let number = 0; number <= insertedNum; number++) {
    let powerNum = number ** 2
    console.log(powerNum)
}

Задание 12

Напишите программу, которая выводит в консоль числа от 1 до 100.
При этом вместо чисел, кратных трем, программа должна выводить слово« Fizz», а вместо чисел, кратных пяти, —слово« Buzz».Если число кратно и 3, и 5, то программа должна выводить слово« FizzBuzz»

for (let num = 1; num <= 100; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("FizzBuzz")
    } else if (num % 3 == 0) {
        console.log("Fizz")
    } else if (num % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(num)
    }
}