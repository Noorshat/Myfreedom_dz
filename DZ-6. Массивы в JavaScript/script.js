//Задание-1

const queue = ['Арман', 'Динара', 'Ерлан'];

queue.push('Серик');

queue.unshift('Айгуль');

const currentClient = queue.shift();

console.log(`К окну номер 1 приглашается: ${currentClient}`);
console.log(`Остаток очереди: ${queue}`);

//Задание-2

const transactions = [1200, 45000, 800, 15500, 300, 24000];

let totalSum = 0;
let bigPurchasesCount = 0;

for (let amount of transactions) {
    totalSum += amount;

    if (amount > 10000) {
        bigPurchasesCount++;
    }
}

console.log(`Итого потрачено за день: ${totalSum} ₸`);
console.log(`Количество крупных покупок (более 10000 ₸): ${bigPurchasesCount}`);