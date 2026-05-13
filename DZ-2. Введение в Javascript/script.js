//Задание-1

const firstName = prompt("Введите ваше имя:");
const lastName = prompt("Введите вашу фамилию:");
const age = prompt("Введите ваш возраст:");
const city = prompt("Введите ваш город:");
const job = prompt("Введите вашу профессию:");

const businessCard = `Визитная карточка
Имя: ${firstName} ${lastName}
Возраст: ${age} лет
Город: ${city}
Профессия: ${job}`;

console.log(businessCard);

//Задание-2

const myAge = 27;
const myName = "Нуршат";
const isStudent = true;
const someValue = undefined;
const emptyBox = null;

console.log("--- Информация о типах данных ---");

console.log("Значение:", myAge, "| Тип:", typeof myAge);
console.log("Значение:", myName, "| Тип:", typeof myName);
console.log("Значение:", isStudent, "| Тип:", typeof isStudent);
console.log("Значение:", someValue, "| Тип:", typeof someValue);
console.log("Значение:", emptyBox, "| Тип:", typeof emptyBox);

console.log("--- Преобразование типов ---");

const ageToStr = String(myAge);
console.log("Число в строку:", ageToStr, "| Новый тип:", typeof ageToStr);

const strToNum = Number("100");
console.log("Строка в число:", strToNum, "| Новый тип:", typeof strToNum);

const summary = `Меня зовут ${myName}. Мне ${myAge} лет. Статус студента: ${isStudent}.`;
console.log("--- Итоговое сообщение ---");
console.log(summary);