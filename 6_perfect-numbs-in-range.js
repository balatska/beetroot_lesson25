// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. 
// Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

let number1 = parseInt(prompt("Введите первое число"));
    while(isNaN(number1)) {
    number1 = parseInt(prompt("Ошибка. Введите число"));
    }
    console.log(`С: ${number1}`);

let number2 = parseInt(prompt("Введите второе число"));
    while(isNaN(number2)) {
    number2 = parseInt(prompt("Ошибка. Введите число"));
    }
    console.log(`По: ${number2}`);

if (number1 < number2) {
    function isPerfect(){
        for (n=number1; n<=number2; n++) {
            if (n !== undefined);
            console.log(checkPerfectNumbers());
        } 
    }
} else {
    function isPerfect(){
        for (n=number2; n<=number1; n++) {
            console.log(checkPerfectNumbers());
        } ;
    }
}

function sumDividers() {
    let sum = 1;
    for (i=2; i<=n/2; i++) {
        if(n%i == 0) sum +=i;
    }
    return sum;
}

function checkPerfectNumbers() {
    if (sumDividers() == n) {
        console.log(n);
    } 
}


console.log(isPerfect());
