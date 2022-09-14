const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const foodIngredients = ingredients.map((item) => {
  const foodIngredients = document.createElement("li");

  foodIngredients.classList.add("item");

  foodIngredients.textContent = item;

  return foodIngredients;
});

ingredientsList.append(...foodIngredients);
