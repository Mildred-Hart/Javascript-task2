const fig1 = parseInt(prompt('Enter First Number: '));
const operator = (prompt('Enter Operator (+, -, *, /)'));
const fig2 = parseInt(prompt('Enter Second Number'));

let result;

if (isNaN(fig1) || isNaN(fig2)) {
    alert('Incorrect! Refresh and Try Again');
} else{

    if (operator == '+') {
        result = fig1 + fig2;
    }else if (operator == '-'){
        result = fig1 - fig2;
    }else if (operator == '*'){
        result = fig1 * fig2;
    }else if (operator == '/'){
        result = fig1 / fig2;
    }else {
        alert('Error! Kindly check the Operator Used. Now Refresh!')
    }
}

let message = fig1 + ' ' + operator + ' ' + fig2 + ' = ' + result;

alert (message);