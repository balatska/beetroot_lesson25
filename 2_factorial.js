// Написать функцию, которая вычисляет факториал переданного ей числа.

// let i = prompt("Введите число");

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
  
console.log( factorial(prompt("Введите число")) );
