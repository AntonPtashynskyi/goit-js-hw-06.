const input = document.querySelector('#font-size-control');
const textEl = document.querySelector('span#text');

input.addEventListener('input', handleFontSizeInput);

function handleFontSizeInput(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}