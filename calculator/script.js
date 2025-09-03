 const display = document.getElementById("display");

    // Append value to display
    function appendValue(value) {
      display.value += value;
    }

    // Clear display
    function clearDisplay() {
      display.value = "";
    }

    // Calculate result
    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    // Keyboard Support
    document.addEventListener("keydown", (event) => {
      const key = event.key;

      if (!isNaN(key) || "+-*/().".includes(key)) {
        appendValue(key);
      } else if (key === "Enter") {
        calculateResult();
      } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
      } else if (key.toLowerCase() === "c") {
        clearDisplay();
      }
    });