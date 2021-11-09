const inputEl = document.querySelector('#validation-input');
const lengthToCheck = document.querySelector('input[data-length="6"]');
const length = parseInt(lengthToCheck.dataset.length);
console.dir(length);

inputEl.addEventListener('blur', onFocusInputColor);
function onFocusInputColor(event) {
  if (event.target.value.length === length) {
    inputEl.className = 'valid';
  } else {
    inputEl.className = 'invalid';
  }
}
