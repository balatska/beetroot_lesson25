// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.

function concatenate(i, j, k) {
    if (isNaN(+i && +j && +k)) {
        console.log("Ошибка");
    } else return i + j + k;
}

console.log(concatenate(prompt("Цифра 1"), prompt("Цифра 2"), prompt("Цифра 3")));

