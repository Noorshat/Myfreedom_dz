//Задание-1

const input = document.querySelector('#item-input');
const btn = document.querySelector('#add-btn');
const list = document.querySelector('.shopping-list');

btn.addEventListener('click', function() {
    const text = input.value.trim();

    if (text !== "") {
        const newItem = document.createElement('li');
        
        newItem.textContent = text;
        
        list.append(newItem);
        
        input.value = "";
    }
});

//Задание-2

const notifyBtn = document.querySelector('#notify-btn');
const container = document.querySelector('#container');

notifyBtn.addEventListener('click', function() {
    const toast = document.createElement('div');
    toast.classList.add('notification');
    toast.textContent = 'Успешно!';

    container.append(toast);

    setTimeout(function() {
        toast.remove();
    }, 3000);
});