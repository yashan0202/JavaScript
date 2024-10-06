function bmi (weight,height){
    var bmiCalculator= Math.round(weight / (height*height));

// console.log("Your BMI is "+ bmiCalculator);
    return bmiCalculator;
    
}

bmi(58,1.55);