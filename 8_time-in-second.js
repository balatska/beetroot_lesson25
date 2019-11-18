// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

let time = {
    hours: +prompt("Введите часы"),
    minutes: +prompt("Введите минуты"),
    seconds: +prompt("Введите секунды"),  
}

function timeInSecond () {
    time.hours*= 3600;
    time.minutes*= 60;

    let sumSecond = 0;
    for (let key in time) {
    sumSecond += time[key];
    }

    return sumSecond;
}

console.log(timeInSecond());