// document.getElementById('addButton').addEventListener('click', function() {
//     const num1 = parseFloat(document.getElementById('input1').value);
//     const num2 = parseFloat(document.getElementById('input2').value);
//     const result = num1 + num2;
//     document.getElementById('result').innerText = 'Result: ' + result;
// });

// document.getElementById('subtractButton').addEventListener('click', function() {
//     const num1 = parseFloat(document.getElementById('input1').value);
//     const num2 = parseFloat(document.getElementById('input2').value);
//     const result = num1 - num2;
//     document.getElementById('result').innerText = 'Result: ' + result;
// });
// Initialising the variables 

const add = document.getElementById('addBtn');
const subtract = document.getElementById('subtractBtn');
const clear = document.getElementById('clearBtn');
const lastInput = document.getElementById('lastInput');
const firstInput = document.getElementById('firstInput');
const result = document.getElementById('resultInput');
const valueInput = document.getElementById('valueInput');
const validator = document.getElementById('validator');

// Event listeners for each button

add.addEventListener('click', () => {
    if (firstInput.value === '' && lastInput.value === '') {
        validator.textContent = 'You have not input a number !';
    }else if (firstInput.value === '' || lastInput.value === '') {
        validator.textContent = 'Please enter both numbers !';
    }
    else {
        validator.textContent = '';
        result.value = parseFloat(firstInput.value) + parseFloat(lastInput.value);
        valueInput.value = `${firstInput.value} + ${lastInput.value}`
    }
});
subtract.addEventListener('click', () => {
    if (firstInput.value === '' && lastInput.value === '') {
        validator.textContent = 'You have not input a number !';
    }else if (firstInput.value === '' || lastInput.value === '') {
        validator.textContent = 'Please enter both numbers !';
    }
    else {
        validator.textContent = '';
        result.value = parseFloat(firstInput.value) - parseFloat(lastInput.value);
        valueInput.value = `${firstInput.value} - ${lastInput.value}`
    }
});
clear.addEventListener('click', () => {
    firstInput.value = '';
    lastInput.value = '';
    result.value = '';
    valueInput.value = '';
    validator.textContent = '';
});
