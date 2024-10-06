var light = 'red';

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//---------------------------------------------------------------------------------------------------------------------------------

var age = 10;
if (age >= 65){
    console.log("You get your income from your pension")
}
else if (age<65 && age>=18){
    console.log("Each month you get a salary")
}
else if (age< 18){
    console.log("You get an allowance")
}
else {
    console.log("The value of the age variable is not numerical")
}