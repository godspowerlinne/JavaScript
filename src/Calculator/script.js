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
    let firstInputvalue = parseFloat(firstInput.value);
    let lastInputvalue = parseFloat(lastInput.value);
    if (firstInput.value === '' && lastInput.value === '') {
        validator.textContent = 'You have not input a number !';
    }else if (firstInput.value === '' || lastInput.value === '') {
        validator.textContent = 'Please enter both numbers !';
    }else if (isNaN(firstInputvalue && isNaN(lastInputvalue))) {
        validator.textContent = 'Please enter valid numbers !';
    }else if  (isNaN(firstInputvalue)) {
        validator.textContent = 'Please enter valid first number !'; 
    }else if (isNaN(lastInputvalue)) {
    validator.textContent = 'Please enter valid last number !';
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
    }else if (isNaN(firstInputvalue && isNaN(lastInputvalue))) {
        validator.textContent = 'Please enter valid numbers !';
    }else if  (isNaN(firstInputvalue)) {
        validator.textContent = 'Please enter valid first number !';
    }else if (isNaN(lastInputvalue)) {
    validator.textContent = 'Please enter valid last number !';
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
if (firstInputValue.length && firstInputValue.length.contains('a') ) {
    alert('Invalid input!');
}