const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueToChange = document.querySelector('#value')

decrementBtn.addEventListener('click', handleButtonDecrementClick);
incrementBtn.addEventListener('click', handleButtonIncrementClick);
let counterValue = 0;

function handleButtonDecrementClick() {
  counterValue -= 1;
  updateCounter();
};

function handleButtonIncrementClick() {
  counterValue += 1;  
  updateCounter();
};

function updateCounter () {
  valueToChange.textContent = counterValue;
}