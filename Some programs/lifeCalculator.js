function lifeRemaining (age){
    var yearsRemaining = 60 - age;
    var monthsReamaing = yearsRemaining*12;
    var weeksRemaining = yearsRemaining*52;
    var daysRemaining = yearsRemaining*365;

console.log("You have "+yearsRemaining+ " years, "+monthsReamaing+ " months, "
+weeksRemaining+ " weeks and "+daysRemaining+ " days remaining");
}

lifeRemaining(21);

