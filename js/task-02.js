const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsList = array => {
  return array.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;

    return ingredientsListEl.insertAdjacentElement('beforeend', itemEl);
  });
};

makeIngredientsList(ingredients);