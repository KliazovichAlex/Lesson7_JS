function complete() {
  var user = "Имя: " + document.info.name.value;
  var birthday = "Дата вашего рождения " + document.info.birthday.value;
  var n = document.info.education.selectedIndex;
  var edu = "У вас " + document.info.education[n].text + " образование.";

  function checkSex() {
    if (document.info.sex[0].checked) {
      return "Мужской";
    } else {
      return "Женский";
    }
  }

  alert(user + "\n" + birthday + "\n" + edu + "\n" + "Ваш пол : " + checkSex());
}
