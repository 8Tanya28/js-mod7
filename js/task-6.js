// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його
// вміст на правильну кількість символів.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символів"/>
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,
// якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.
// #validation-input {
//   border: 3px solid #bdbdbd;}
// #validation-input.valid {
//   border-color: #4caf50;}
// #validation-input.invalid {
//   border-color: #f44336;}

const inputRef = document.querySelector("#validation-input");
const textLenght = inputRef.getAttribute("data-length");
console.log(textLenght);

function onInputBlur(event) {
  if (event.target.value.length === Number(textLenght)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", onInputBlur);

// const inputRef = document.querySelector("#validation-input");
// console.log(inputRef.getAttribute("data-length"));
// inputRef.addEventListener("blur", (event) => {
//   if (event.target.value.length == inputRef.getAttribute("data-length")) {
//     inputRef.classList.add("valid");
//     if (inputRef.classList.contains("invalid")) {
//       inputRef.classList.remove("invalid");
//     }
//   } else {
//     if (inputRef.classList.contains("valid")) {
//       inputRef.classList.remove("valid");
//     }
//     inputRef.classList.add("invalid");
//   }
// });
