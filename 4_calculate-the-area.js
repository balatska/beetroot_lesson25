// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function calculateTheArea(a, b) {
    if (Number(a) && Number(b)) {
    return `Площадь прямоугольника ${a * b}`;
    } else if (a == 0 && Number(b) || b == 0 && Number(a)) {
        return `Площадь квадрата ${a**2}`
    } else {
        return `Ошибка.`
    }
}

console.log(calculateTheArea(+prompt("Длина прямоугольника:"), +prompt("Ширина прямоугольника:")));
