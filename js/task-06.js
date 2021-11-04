const inputEl = document.querySelector('#validation-input');
const lengthToCheck = document.querySelector('input[data-length="6"]');
const length = lengthToCheck.dataset.length

inputEl.addEventListener('blur', onFocusInputColor);

function onFocusInputColor(event) {
  if (event.target.value.length < length) {
    inputEl.className = 'invalid';
  } else {
    inputEl.className = 'valid';
  }
};

// ==========================================
// function onFocusInputColor(event) {
//   if (event.target.value.length < length) {
//     inputEl.classList.add('invalid');
//     inputEl.classList.remove('valid');
//   } else {
//     inputEl.classList.add('valid');
//     inputEl.classList.remove('invalid');
//   }
// };

