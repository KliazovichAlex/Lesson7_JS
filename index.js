const opemModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const modalWrapper = document.querySelector(".modalWrapper");
const form = document.querySelector("#form");
// modal window ^

const text = document.querySelector("#text");
const age = document.querySelector("#age");
const date = document.querySelector("#date");
const adu = document.querySelector("#adu");
const radio = document.getElementsByName("radio");
const list = document.querySelector(".list");
const radioForm = document.querySelector("#radioForm");
const ul = document.querySelector("listStart");
let arr = [];
function checkSex(input) {
  if (input[0].checked) {
    return "Мужской";
  } else {
    return "Женский";
  }
}

function validation(text) {
  const smth = document.querySelector(".smth");
  const error = document.getElementsByClassName("error");
  const fieldError = document.querySelector(".field-error");
  if (text.value === "") {
    smth.classList.toggle("error");
    text.classList.toggle("field-error");
  } else {
    modalWrapper.style.display = "block";
    arr.push(text.value, age.value, date.value, adu.value, checkSex(radio));
    arr.forEach(function (item) {
      let li = document.createElement("li");
      let text = document.createTextNode(item);
      li.appendChild(text);
      document.getElementById("listStart").appendChild(li);
    });
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  validation(text);
});

closeModalBtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});
