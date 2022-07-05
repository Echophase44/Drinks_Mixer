document.querySelector("button").addEventListener("click", getDrinks);
document.querySelector(".forward").addEventListener("click", goForward);
document.querySelector(".backward").addEventListener("click", goBackward);
let currentData = {};
let currentSelection = 0;

function getDrinks() {
  let drinkType = document.querySelector("input").value.trim();
  drinkType = drinkType.replace(" ", "_");

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkType}`)
    .then((res) => res.json())
    .then((data) => {
      currentSelection = 0;
      console.log(data);
      currentData = data;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function goForward() {
  if (currentSelection === currentData.drinks.length - 1) {
  } else {
    currentSelection = currentSelection + 1;
    updateDisplay();
  }
}

function goBackward() {
  if (currentSelection === 0) {
  } else {
    currentSelection = currentSelection - 1;
    updateDisplay();
  }
}

function updateDisplay() {
  document.querySelector("img").src =
    currentData.drinks[currentSelection].strDrinkThumb;
  document.querySelector("h2").innerText =
    currentData.drinks[currentSelection].strDrink;
  document.querySelector("h3").innerText =
    currentData.drinks[currentSelection].strInstructions;
}
