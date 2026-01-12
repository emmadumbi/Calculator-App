const numberBtns = document.querySelectorAll('[data-action="number"]');
const screen = document.querySelector('#screen');
const backSpaceBtn = document.querySelector('#delete-btn');

let currentvalue = '';
let previousValue = '';
let initialValue = 0;
let firstExpression;

screen.value = initialValue;

numberBtns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    displayExpression(btn.dataset.value)
  });
});

backSpaceBtn.addEventListener('click',backSpace)


function displayExpression(value) {
  if (screen.value === '0') {
    screen.value = value;
  } else {
    screen.value += value;
  }
  currentvalue = screen.value;
};

function backSpace() {
  let newScreenValue = screen.value;
  screen.value = newScreenValue.slice(0,-1)
  if (screen.value === '') {
    screen.value = initialValue;
  };
};

function addOperator(operator) {
  
}


/*let expression= '';

function addValue(value) {
  expression += value;
}

function deleteValue() {
  expression = expression.slice(0,-1);
}

function resetValue() {
  expression = '';
}

function buttonClick(event) {
  const target = event.target;
  const btnAction = target.dataset.action;
  const btnValue = target.dataset.value;
  
  switch(btnAction){
    case 'number':
      addValue(btnValue)
      break;
    case 'operation':
      console.log('operation')
      break;
    case 'delete':
      deleteValue();
      break;
    case 'reset':
      resetValue()
      break;
      
  }
  
  screen.value = expression;
}

keys.addEventListener('click', buttonClick)*/


