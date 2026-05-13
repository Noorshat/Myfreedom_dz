//Задание-1

const userAge = Number(prompt("Сколько вам лет?"));

if (userAge >= 18) {
    alert("Доступ на сайт разрешен");
} else {
    alert("Извините, доступ только с 18 лет");
}

//Задание-2

const weather = prompt("Какая сейчас погода? (солнце, дождь или снег)").toLowerCase();

if (weather === "солнце") {
    console.log("Отличная погода для прогулки!");
} else if (weather === "дождь") {
    console.log("Не забудьте взять зонт.");
} else if (weather === "снег") {
    console.log("Одевайтесь теплее, на улице мороз!");
} else {
    console.log("Я не знаю такой погоды.");
}