// let total = 0;
// let input = prompt('Введіть число')
// console.log(input);
// // input = Number(input);
// // console.log(typeof (input));

// total = total + input;
// console.log(total);
// console.log(typeof (total));

// for (let i = 0; i < 10; i += 1){
//     console.log(i);
// }


//Оголошення змінних
let input;
let total = 0;

//цикл promt доки не натиснено cancel
for (let i = 0; i < 2; i += 1){
    let addinput;
    input = prompt('Введіть число');
    addinput = Number(input)
    if (Number.isNaN(addinput)) {
        alert('Було написано не число, спробуйте ще раз')
    }
    console.log(addinput);
    // console.log(typeof(input));
    total += addinput;
    console.log(total);

    if (input === null) {
        alert(`Загальна сума чисел дорівнює ${total}`)
        break;
    }
}


//отримана змінна додається до total

//alert
//перевірка на число alert
// Number.isNaN()



///Цикл з рандомізацією
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 17;
// let totalSalary = 0;

// for (let i = 1; i <= 10; i += 1){
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );

//     console.log(`ЗП робітника номер ${i} - ${salary}`);

//     totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);