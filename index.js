const screen = document.querySelector('#screen');
const operationBtns = document.querySelectorAll('[data-action="operation"]');
const numberBtns = document.querySelectorAll('[data-action="number"]');


numberBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const btnValue = Number(btn.dataset.value);
   console.log(btnValue)
  })
})

function performOperation() {
  // Tab to edit
}