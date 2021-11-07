const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  destroyBoxes();

  for (let i = 0; i < input.value; i += 1) {
    const container = document.createElement('div');
    const size = 30 + i * 10;

    container.style.width = `${size}px`;
    container.style.height = `${size}px`;
    container.style.backgroundColor = getRandomHexColor();

    box.insertAdjacentElement('beforeend', container);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes(event) {
  box.innerHTML = '';
}
