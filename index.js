const screen = document.querySelector("#screen");
const keys = document.querySelector("#keys");

let screenDisplay = "0";

updateScreen();
keys.addEventListener("click", (e) => {
  const btn = e.target;
  const action = btn.dataset.action;
  const value = btn.dataset.value;
  const btnContent = btn.textContent;

  if (action === "number") {
    handleNumber(value);
  } else if (action === "operator") {
    handleOperator(value);
  } else if (action === "delete") {
    handleDelete();
  } else if (action === "reset") {
    handleReset();
  } else if (btnContent === "=") {
    handleCalculate();
  }
  updateScreen();
});

function handleNumber(value) {
  if (screenDisplay === "0" && value !== ".") {
    screenDisplay = value;
  } else {
    screenDisplay += value;
  }
}

function handleOperator(sign) {
  const operators = ["+", "-", "*", "/"];
  const lastChar = screenDisplay.slice(-1);

  if (screenDisplay === "0") {
    if (sign === "-") {
      screenDisplay = "-";
    }
  }

  if (screenDisplay === "-") return;

  if (operators.includes(lastChar)) {
    screenDisplay = screenDisplay.slice(0, -1) + sign;
    return;
  }

  screenDisplay += sign;
}

function handleDelete() {
  let newExpression = screenDisplay.slice(0, -1);
  screenDisplay = newExpression;
  if (screenDisplay === "") screenDisplay = "0";
}

function handleReset() {
  screenDisplay = "0";
}

function handleCalculate() {
  const expression = screenDisplay.replaceAll("×", "*");
  const result = eval(expression);
  screenDisplay = String(result);
}

function updateScreen() {
  screen.innerHTML = screenDisplay.replaceAll("*", "×");
}
