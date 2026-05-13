//Задание-1

const bankAccount = {
    ownerName: "Нуршат",
    cardNumber: "4400 1234 5678 9012",
    balance: 50000,

    deposit(amount) {
        this.balance += amount; // То же самое, что this.balance = this.balance + amount
        console.log(`Счет пополнен на ${amount} ₸. Текущий баланс: ${this.balance} ₸`);
    },

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Перевод на ${amount} ₸ выполнен. Остаток: ${this.balance} ₸`);
        } else {
            console.log(`Недостаточно средств! На балансе всего ${this.balance} ₸`);
        }
    }
};

bankAccount.deposit(15000);
bankAccount.withdraw(100000);
bankAccount.withdraw(5000);

//Задание-2

const cart = {
    'Мясо (казы)': 12000,
    'Бауырсаки': 1500,
    'Кумыс': 2000,
    'Чай': 1800
};

let totalSum = 0;

for (let product in cart) {
    let price = cart[product];
    
    console.log(`${product}: ${price} ₸`);
    
    totalSum += price;
}

console.log("--------------------");
console.log(`Итого к оплате: ${totalSum} ₸`);