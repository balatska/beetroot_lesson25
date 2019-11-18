// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

let n = parseInt(prompt("Введите число"));
    while(isNaN(n)) {
    n = parseInt(prompt("Ошибка. Введите число"));
    }
    console.log(n);

function sumDividers() {
    let sum = 1;
    for (i=2; i<=n/2; i++) {
        if(n%i == 0) sum +=i;
    }
    return sum;
}

function checkPerfectNumbers () {
    sumDividers() == n ? console.log("Совершенное число!") : console.log("Число не является совершенным.");
}

console.log(sumDividers());
console.log(checkPerfectNumbers());