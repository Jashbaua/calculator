# Calculator

<img src="https://github.com/user-attachments/assets/273fc6df-60fc-496e-82af-66e3b6a8708d" width="300"/>

Live Demo: [Calculator](https://jashbaua.github.io/calculator/)

A simple on-screen calculator built with HTML, CSS, and JavaScript. It demonstrates basic arithmetic operations and interactive DOM manipulation without using the `eval()` function.

## Overview

This calculator supports:
- Addition, subtraction, multiplication, and division functions
- Chaining operations in a single session (e.g., `12 + 7 – 4`)
- Decimal input (with logic to prevent multiple decimal points per number)
- “Clear” button to reset all inputs
- “Backspace” button to remove the last digit or decimal point
- Snarky error handling for divide-by-zero attempts
- Keyboard support for numbers, operators, Backspace, Enter (=), and Escape (clear)

Under the hood:
1. Individual functions (`add()`, `subtract()`, `multiply()`, `divide()`) handle the four basic operations.
2. An `operate()` function takes an operator (`+`, `-`, `×`, `÷`) and two numbers, then calls the corresponding math function.
3. The display logic keeps track of:
   - First number
   - Chosen operator
   - Second number
   - Current display value
   - Whether a result has just been shown (so new digit inputs start a fresh calculation)
4. Edge cases are handled, including:
   - Preventing evaluation until two numbers and an operator are provided
   - Rounding long decimal results to a maximum of 8 characters
   - Ignoring consecutive operator clicks (only the last operator is used)
   - Displaying a playful error message if the user tries to divide by zero

## Demo

To see a live demo, simply open the `index.html` file in your browser:
git clone https://github.com/your-username/calculator.git
cd calculator
open index.html


## Usage

- Click any digit (0–9) to build the first number.
- Click an operator (`+`, `−`, `×`, or `÷`) to select the operation.
- Click more digits to build the second number.
- Click `=` (or press `Enter`) to calculate and display the result.
- Click `C` (or press `Escape`) to clear the display and start over.
- Click `⌫` (Backspace) to delete the last character in the display.
- Click `.` to insert a decimal point (disabled if there’s already one in the current number).
- After a result appears, clicking a digit automatically starts a new calculation.

## Built With

- **HTML5** for the structure and buttons
- **CSS3** for basic styling (flexbox grid for button layout, responsive display)
- **JavaScript (ES6)** for all functionality (no use of `eval()`)
