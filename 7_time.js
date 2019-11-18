// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let time = {
    hours: +prompt("Введите часы"),
    minutes: +prompt("Введите минуты"),
    seconds: +prompt("Введите секунды"),  
}

function timeNormalize() {
    time.minutes = +time.minutes + Math.floor(time.seconds / 60); 
    time.seconds%= 60;
    time.hours = +time.hours + Math.floor(time.minutes / 60); 
    time.minutes%= 60;
    time.hours%= 24;

    showTime();

}

function showTime() {
    for (key in time) {
        if (time [key] >= 60) {
            timeNormalize();
        } else if (time [key] == 0) {
            time [key] = `00`;
        } else if (time [key] < 10) {
            time [key] = `0${time [key]}`;
        } else {
            time [key];
        }
    }

    return `Время - ${time.hours} : ${time.minutes} : ${time.seconds}`;
}

console.log(showTime());