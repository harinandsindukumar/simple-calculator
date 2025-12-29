document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    let currentInput = "";
    let previousInput = "";
    let operator = null;

    // Function to update display
    function updateDisplay() {
        display.textContent = currentInput || "0";
    }

    // Event listener for button clicks
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function () {
            const key = this.getAttribute("data-key");

            switch (key) {
                case "clear":
                    currentInput = "";
                    previousInput = "";
                    operator = null;
                    break;
                case "back":
                    currentInput = currentInput.slice(0, -1);
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                    operator = key;
                    previousInput = currentInput;
                    currentInput = "";
                    break;
                case "=":
                    if (operator && previousInput !== "" && currentInput !== "") {
                        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                        operator = null;
                        previousInput = "";
                    }
                    break;
                default:
                    if (currentInput.length < 10) {
                        currentInput += key;
                    }
            }
            updateDisplay();
        });
    });
    updateDisplay();
});