
const colorBtn = document.querySelector('.change-color');
const nameOfColor = document.querySelector('.color');
const colorOfBody = document.querySelector('body')

colorBtn.addEventListener('click', handleNameOfColor);
colorBtn.addEventListener('click', handleBGColor);


function handleNameOfColor(event) { 
  nameOfColor.textContent = changeColorBtn();
}

function handleBGColor(params) {
  colorOfBody.style.backgroundColor = changeColorBtn();
}

function changeColorBtn() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
