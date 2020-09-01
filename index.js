function complete() {
  let form = getInfo("info");
  let name = getInfo("name", true);
  let age = getInfo("age");
  let birthDate = getInfo("birthday");
  let edu = getInfo("education");
  let sex = getInfo("sex");

  alert(
    name.value +
      " " +
      age.value +
      " " +
      birthDate.value +
      " " +
      checkEdu(edu) +
      " " +
      checkSex(sex)
  );
}

function getInfo(param, isName) {
  let data = document.getElementById(param);
  if (data.value === "" && isName === true) {
    data.classList.toggle("error_enter");
  } else {
    return data;
  }
}

function checkEdu(input) {
  if (input.value === "high") {
    return "Высшее";
  } else if (input.value === "middle") {
    return "Среднее";
  } else {
    return "Низшее";
  }
}

function checkSex(gender) {
  if (gender.checked) {
    return "Мужской";
  } else {
    return "Женский";
  }
}
