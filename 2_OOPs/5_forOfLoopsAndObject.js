//method 1

var colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//method 2

var colors = ['red','orange','yellow']
console.log(colors);

//method 3 (using Object.keys)

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));

//method 4 (using Object.values)

const car3 = {
    speed: 200,
    color: "red"
}
console.log(Object.values(car3));

//method 5 (using Object.entries)

const car4 = {
    speed: 200,
    color: "red"
}
console.log(Object.entries(car4));

//method 6 (using for in loop)

const car5 = {
    speed: 200,
    color: "red"
}
for (var key in car5) {
    console.log(key);
}

