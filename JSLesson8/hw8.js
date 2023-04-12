// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ...

// (необходимые значения добавьте с помощью BOM)

console.log(`На компьютере с ОС ${navigator.appName} с помощью браузера ${navigator.vendor} я открыл страничку google `)

// Задание 2

// В файле html есть разметка:

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// Вывести в консоль каждое из имен (содержимое каждого li).

// ПОДСКАЗКИ

// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную. У вас получится html-коллекция (массив).

// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)

let allNames = document.querySelectorAll('li')
allNames.forEach((element) => {
    console.log(element.innerText)
})

// Задание 3   ?????????????????????????????

// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

let allNames = document.querySelectorAll("li");
allNames.forEach((item,index) => {
  item.innerText = index
});
console.log(allNames);

// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let text = document.createElement('p');
document.body.appendChild(text)
text.innerText = 'Some random text'
text.style.fontSize = "36px";
text.style.fontWeight = "bold"

// Задание 5

// Написать в html тег заголовка с текстом "Сегодня:"

// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.

let date = new Date();

let title = document.createElement("h1");
let para = document.createElement("p");

document.body.appendChild(title);
title.innerText = "Today";

document.body.appendChild(para);
para.innerText = date.toLocaleDateString();

// Задание 6

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function tagAdder(tag, color, content) {
  let createdTag = document.createElement(tag);
  document.body.appendChild(createdTag);
  createdTag.style.color = color;
  createdTag.innerText = content;
}

tagAdder("h1", "red", "Hello");
tagAdder("p", "blue", "Goodbye");
tagAdder("div", "green", "The world is beautiful");
tagAdder("h2", "purple", "I am tired");

// Задание 7   ?????????????????????????????????????????????????????????????????????????????????????????????????????????????

// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// Задание 8

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

const clients = [

{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}

]

Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом

Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true },
];

let ul = document.createElement("ul");
document.body.appendChild(ul);

clients.map((item) => {
  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li);

  if ((item.order === true)) {
    li.innerText = `Клиент ${item.name} оплатил заказ`;
  } else {
    li.innerText = `Клиент ${item.name} отменил заказ`;
  }
});

// Задание 9

// Есть массив ссылок:

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")

// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:

// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''

// Вкладывать ссылки в див нужно с помощью метода appendChild или append.

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

let linksArr = [
  "https://www.amazon.com/",
  "https://www.youtube.com/",
  "https://devby.io/",
  "https://www.google.com/",
  "https://apple.com/",
];

let div = document.createElement("div");
document.body.appendChild(div);
div.style.background = "lightgreen";
div.style.padding = "50px";

linksArr.forEach((item) => {
  let link = document.createElement("a");
  link.setAttribute("href", item);
  link.setAttribute("target", "_blank");
  link.innerText = item;
  link.style.display = "block"
  div.appendChild(link);
});

// Задание 10

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.

// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().

// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li
let li = document.querySelectorAll("li");
li.setAttribute("class", "forRemove");
li.classList.add("forRemove")

let elements = document.querySelectorAll(".forRemove");
elements.forEach((item) => {
  item.remove();
});

// Задание 11*

// Создать массив объектов с полями name, age. Например:

// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},

// {name:'Den', age: 43}
// ]

// Создать в html таблицу (table).

// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const users = [
  { name: "Mark", age: 12 },
  { name: "Olga", age: 30 },
  { name: "Tom", age: 25 },
  { name: "Den", age: 43 },
];
let table = document.querySelector("table");
users.forEach((item) => {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = item.name;
  td1.style.color = "red"
  let td2 = document.createElement("td");
  td2.innerText = item.age;
  td2.style.color = "blue"
  tr.append(td1);
  tr.append(td2);
  table.append(tr);
});

// Задание 12

// Есть верстка: https://teenscool1.notion.site...

// С помощью JavaScript:

// 1) Найти в коде список ul и добавить ему класс “list”.

// 2) На li через один (начиная с самого первого) установить класс “item”

// 3) На все ссылки в примере установить класс “custom-link”

let ul = document.querySelector("ul");
ul.classList.add("list");

let li = document.querySelectorAll("li");
li.forEach((item) => {
  item.classList.add("item");
});

let a = document.querySelectorAll("a");
a.forEach((item) => {
  item.classList.add("item");
});