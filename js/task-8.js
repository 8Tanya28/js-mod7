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

const boxes = document.querySelector("#boxes");
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const inputArea = document.querySelector("input");

function createBoxes(amount) {
  let basicWidth = 30;
  let basicHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const someDiv = document.createElement("div");

    let randomNumberForRed = Math.random() * (0, 255) + 0;
    let randomNumberForGreen = Math.random() * (0, 255) + 0;
    let randomNumberForBlue = Math.random() * (0, 255) + 0;

    if (i > 0) {
      basicWidth += 10;
      basicHeight += 10;
    }

    someDiv.style.width = basicWidth + "px";
    someDiv.style.height = basicHeight + "px";
    someDiv.style.backgroundColor = `rgb(${randomNumberForRed}, ${randomNumberForGreen}, ${randomNumberForBlue})`;

    boxes.appendChild(someDiv);
  }
}

function destroyBoxes() {
  const allBoxes = boxes.querySelectorAll("div");
  allBoxes.forEach((box) => boxes.removeChild(box));
}

renderButton.addEventListener("click", () => {
  createBoxes(inputArea.value);
});

destroyButton.addEventListener("click", destroyBoxes);
