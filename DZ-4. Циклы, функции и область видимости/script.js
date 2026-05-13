//Задание-1

function calculateDeposit(amount, percent, years) {
    let currentAmount = amount;
    const yearlyMultiplier = percent / 100;

    for (let i = 1; i <= years; i++) {
        currentAmount = currentAmount + (currentAmount * yearlyMultiplier);
        console.log(`Год ${i}: на счету ${currentAmount.toFixed(2)} тенге`);
    }

    return currentAmount.toFixed(2);
}

const finalSum = calculateDeposit(200000, 10, 5);

console.log(`--- ИТОГ ---`);
console.log(`Через 5 лет ваш вклад составит: ${finalSum} тенге.`);

//Задание-2

const secretNumber = 7;

while (true) {
    let userInput = prompt('Угадай число от 1 до 10. Для выхода напиши "выход"');

    if (userInput === null || userInput.toLowerCase() === "выход") {
        alert("Игра окончена");
        break;
    }

    let userNumber = Number(userInput);

    if (userNumber === secretNumber) {
        alert("Поздравляю! Вы угадали!");
        break;
    } else {
        alert("Не угадал, попробуй еще раз!");
    }
}