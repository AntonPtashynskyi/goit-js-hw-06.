const countOfCategories = document.querySelector('#categories')
console.log('Number of categories:', countOfCategories.children.length);

const nameOfCategory = document.querySelectorAll('.item');
nameOfCategory.forEach((item) => {
  console.log('Category:', item.firstElementChild.textContent);
  console.log('Elements:', item.lastElementChild.children.length );
})




