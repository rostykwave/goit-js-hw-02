const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Пароль');
if (password === null) {
    console.log(message = 'Скасовано користувачем!');
} else if (password === ADMIN_PASSWORD) {
    console.log(message = 'Ласкаво просимо!');
} else console.log(message = 'Доступ заборонений, невірний пароль!');

alert(message);
