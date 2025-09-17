alert("CALCULATOR");
let num1 = parseFloat(prompt("What is the First Number:"));
let num2 = parseFloat(prompt('What is the Second Number:'));
let operator = prompt("Enter operator (+, *, -, /)");
let result;
if(operator=="+")
    result= num1 + num2;
else if (operator== "-"){
    result= num1 - num2;
}
else if (operator== "*"){
    result= num1 * num2;
    }
else if (operator== "/"){
    result= num1 / num2;
    }
else{
    alert("invalid operator");
}
alert("The result is : " + result);

