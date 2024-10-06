// var name = "yash";
// name = name.toUpperCase();

// WAP to take input from user and change only the first character to uppercase.

var name = prompt("What is your name: ");
var firstChar = name.slice(0,1).toUpperCase();
var restChar = name.slice(1,name.length).toLowerCase();
alert("Hello " + firstChar + restChar);