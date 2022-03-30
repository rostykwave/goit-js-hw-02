const country = prompt('Вкажіть країну доставки: ')
let credits;

switch (country.toLowerCase()) {
    case 'китай':
        credits = 100;
        break;
    case 'чилі':
        credits = 250;
        break;
    case 'австралія':
        credits = 170;
        break;
    case 'індія':
        credits = 80;
        break;
    case 'ямайка':
        credits = 120;
        break;
    
    default:
        credits = null;
}

if (credits === null) {
    alert('У вашій країні доставка недоступна');
} else {
    alert(`Доставка в ${country} буде коштувати ${credits} кредитів`);
}