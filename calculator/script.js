const display = document.getElementById("display");
const input = document.getElementsByClassName("input");
const operator = document.getElementsByClassName("operator");
const equal = document.getElementById("equal-to");
const clear = document.getElementById("clear");

let first = "";
let second = "";
let opr = "";
let shouldResetDisplay = false;

/*
.value          The value attribute/property of an element like a string value
.textContent	The text inside an HTML element
.innerHTML	    The HTML content inside an element
*/

for(let i = 0; i < input.length; i++) {
    input[i].onclick = function() {

        if(shouldResetDisplay) {
            display.value = "";
            shouldResetDisplay = false;
        }
        
        display.value += input[i].textContent;
    }
}

clear.onclick = function(){
    display.value = "";
}

equal.onclick = function(){
    calculate();
}

for(let i=0; i<operator.length; i++){
    operator[i].onclick = function(){
        first = Number(display.value);
        opr = operator[i].textContent;
        shouldResetDisplay = true;
    }
}

function calculate(){
    second = Number(display.value);
    let result;

    switch(opr) {

        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            result = first / second;
            break;
    }

    display.value = result;
    shouldResetDisplay = true;
}

