//Задание-1

const message = prompt("Введите ваше сообщение:").toLowerCase();

if (message.includes("спам") || message.includes("реклама")) {
    console.log("Сообщение заблокировано");
} else {
    console.log("Сообщение опубликовано");
}

//Задание-2

const tasks = ['Урок 1', 'Урок 2', 'Урок 3', 'Урок 4', 'Урок 5'];

tasks.splice(2, 1, 'Практика');

const tasksString = tasks.join(" -> ");

console.log(tasksString);

//Задание-3

const user = 'иВан иВаНов';

const parts = user.split(' ');

const firstName = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase();

const lastName = parts[1][0].toUpperCase() + parts[1].slice(1).toLowerCase();

const result = `${firstName} ${lastName}`;

console.log(result);