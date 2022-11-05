// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. При натисканні на кнопку Очистити,
// колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.
// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Створити</button>
//   <button type="button" data-action="destroy">Очистити</button>
// </div>
// <div id="boxes"></div>

const amount = [];

const refs = {
  div: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};
console.log(input);
function createBoxes(amount) {
  let z = 0;
  for (let i = 1; i <= amount; i++) {
    z += 1;
    const div = document.createElement("div");
    div.style.border = "1px solid blue";
    div.style.margin = "10px";
    div.append(div);
  }
}
createBoxes(amount);
