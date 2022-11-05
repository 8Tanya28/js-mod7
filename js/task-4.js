// Лічильник складається зі спана і кнопок, які повинні збільшувати
// і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;
const decrem = document.querySelector("button[data-action='decrement']");
const increm = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecrem = function () {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncrem = function () {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decrem.addEventListener("click", countDecrem);
increm.addEventListener("click", countIncrem);
