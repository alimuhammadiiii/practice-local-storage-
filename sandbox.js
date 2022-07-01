const inputValue = document.querySelector(".name-value");
const saveData = document.querySelector(".add");
const showData = document.querySelector(".show-data");
let nameUser = JSON.parse(window.localStorage.getItem("user"));
const dataBase = [];
if (dataBase.length === 0 && nameUser !== null) {
  nameUser.forEach((element) => {
    dataBase.push(element);
  });
}

saveData.addEventListener("click", function () {
  let nameValue = inputValue.value;
  inputValue.value = "";
  showData.innerHTML += `<li>${nameValue} </li>`;
  dataBase.push(nameValue);
  localStorage.setItem("user", JSON.stringify(dataBase));
});

if (showData.innerHTML === "") {
  dataBase.forEach((element) => {
    showData.innerHTML += `${element}<br/>`;
  });
}
