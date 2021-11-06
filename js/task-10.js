const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes() {
  let inputV = input.value

  let size = 30;

  for (let i = 0; i < inputV; i += 1) {
    const container = document.createElement('div');
    
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;
    container.style.backgroundColor = getRandomHexColor();
    size += 10;
    
    box.insertAdjacentElement("beforeend", container);
  }

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function destroyBoxes(event) {
  box.innerHTML = '';
}

