//Задание-1

const list = document.getElementById('shopping-list');

const items = document.querySelectorAll('.item');

console.log(`Количество продуктов в списке: ${items.length}`);

//Задание-2

const spy = document.querySelector('.secret');

if (spy) {
    console.log(`Обнаружен: ${spy.textContent}`);
}

//Задание-3

const btn1 = document.getElementById('submit-btn');

const btn2 = document.querySelector('#submit-btn');

const btn3 = document.querySelector('.primary');

console.log(btn1, btn2, btn3);