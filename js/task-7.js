const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твій код
    // console.log(login.length);
    let result = true;
    if (login.length < 4 || login.length > 16) {
        console.log('Помилка! Логін повинен бути від 4 до 16 символів');
        result = false;
    }
    return result;
    // console.log(login);
};

const isLoginUnique = function (allLogins, login) {
  // твій код
    console.table(allLogins);
    console.log(login);
    for (const allLogin of allLogins) {
        if (login === allLogin) {
            console.log('Такий логін уже використовується!');
            break;
        }
        return login;
        // console.log(login);
    }
};

const addLogin = function (allLogins, login) {
  // твій код
    isLoginValid(login);
    console.log(isLoginValid(login));
    isLoginUnique(allLogins, login);
    console.log(login);

};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'