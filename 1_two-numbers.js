// Написать функцию, которая принимает 2 числа 
// и возвращает -1, если первое меньше, чем второе; 
// 1 – если первое больше, чем второе; 
// и 0 – если числа равны.

function compare () {
    let i = +prompt("Введите первое число");
    while(isNaN(i)) {
        i = +prompt("Ошибка. Введите число");
    }

    let j = +prompt("Введите второе число");
    while(isNaN(j)) {
        j = +prompt("Ошибка. Введите число");
    }

    if (i < j) {
        return -1;
    } else if (i > j) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compare());
