class Person {
    // Constructor with default parameters
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    // Method to increase energy by 10
    sleep() {
        this.energy += 10;
    }

    // Method to decrease energy by 10
    doSomethingFun() {
        this.energy -= 10;
    }
}
//2
class Worker extends Person {
    // Constructor with additional parameters for xp and hourlyWage
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        // Call the parent class constructor
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    // Method to increase experience points by 10
    goToWork() {
        this.xp += 10;
    }
}
//3
function intern() {
    // Create a new Worker object with the given characteristics
    let intern = new Worker("Bob", 21, 110, 0, 10);
    
    // Run the goToWork method on the intern object
    intern.goToWork();
    
    // Return the intern object
    return intern;
}
//4
function manager() {
    // Create a new Worker object with the given characteristics
    let manager = new Worker("Alice", 30, 120, 100, 30);
    
    // Run the doSomethingFun method on the manager object
    manager.doSomethingFun();
    
    // Return the manager object
    return manager;
}

// Explanation:
// Task 1: The Person class has default parameters (name, age, and energy) and two methods: sleep() to increase energy and doSomethingFun() to decrease energy.
// Task 2: The Worker class inherits from Person and adds two new parameters (xp and hourlyWage) along with a method goToWork() that increases experience points (xp) by 10.
// Task 3: An intern object is created with specific characteristics, and the goToWork() method is called.
// Task 4: A manager object is created with specific characteristics, and the doSomethingFun() method is called.