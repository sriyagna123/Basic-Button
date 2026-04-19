// Color Changing Button
document.getElementById('colorButton').addEventListener('click', function() {
    // Toggle between blue and red
    this.style.backgroundColor = this.style.backgroundColor === 'blue' ? 'red' : 'blue';
});

// Greeting Alert
document.getElementById('greetButton').addEventListener('click', function() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    alert(greeting);
});

// Basic Calculator
document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
    } else {
        const sum = num1 + num2;
        document.getElementById('result').textContent = 'Result: ' + sum;
    }
});