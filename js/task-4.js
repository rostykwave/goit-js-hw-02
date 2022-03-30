const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const order = prompt('Скільки дроїдів Ви хочете придбати?');

if (order === null) {
    console.log('Скасовано користувачем!');
} else if ((pricePerDroid * order) < credits) {
    console.log(`Ви купили ${order} дроїдів, на рахунку залишилося ${(credits - (pricePerDroid * order))} кредитів.`);
} else (console.log('Недостатньо коштів на рахунку!'))
    