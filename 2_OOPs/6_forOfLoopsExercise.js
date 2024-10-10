// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(){
    for(let product of dairy){
        console.log(product)
    }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly=true;
bird.hasFeathers=true;

function birdCan() {
    // Loop over the bird's own properties using for...of
    for (let key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}
// Call the function to see the output
birdCan();

// Task 3

function animalCan() {
    for (let key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}
// Call the function to see the output
animalCan();