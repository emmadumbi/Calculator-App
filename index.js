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
    handleExpression(value);
  } else if (action === "operator") {
    handleExpression(value);
  } else if (action === "delete") {
    handleDelete();
  } else if (action === "reset") {
    handleReset();
  } else if (btnContent === "=") {
    handleCalculate();
  }
  updateScreen();
});

function handleExpression(value) {
  screenDisplay = screenDisplay === "0" ? value : screenDisplay + value;
}

function handleDelete() {
  const newExpression = screenDisplay;
  screenDisplay = newExpression.slice(0, -1);
  if (screenDisplay === "") screenDisplay = "0";
}

function handleReset() {
  screenDisplay = "0";
}

function handleCalculate() {
  const result = eval(screenDisplay);
  screenDisplay = result;
}

function updateScreen() {
  screen.value = screenDisplay;
}
