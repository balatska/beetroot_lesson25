// Написать функцию, которая вычисляет факториал переданного ей числа.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

let number = +prompt("Введите число");
while (isNaN(number)) { 
    number = +prompt("Ошибка. Введите число");
} 

console.log(factorial(number));
