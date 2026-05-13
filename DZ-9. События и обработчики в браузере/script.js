//Задание-1

const btn = document.querySelector('#add-btn');
const countDisplay = document.querySelector('#count');

let touristsCount = 0;

btn.addEventListener('click', function() {
    touristsCount++;
    countDisplay.textContent = touristsCount;
});

//Задание-2

const inputField = document.querySelector('#review-input');

inputField.addEventListener('input', function(event) {
    const text = event.target.value.toLowerCase();

    if (text.includes('плохо')) {
        inputField.style.borderColor = 'red';
    } else {
        inputField.style.borderColor = 'gray';
    }
});