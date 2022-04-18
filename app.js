let formValidate = document.getElementById("formValidate");
let wrong = document.getElementById("wrong");
formValidate.addEventListener("submit", e => {
  e.preventDefault();

  let missing = false;

  let formulario = e.target;

  let {card, cvc, amount, name, lastName, city, postalCode, state, message} = formulario;

  let validateText = /^[a-zA-Z0-9" "]+$/;
  let validateNumber = /^[0-9]+$/;

  if (card.value === "") {
    missing = true;
    card.classList.add("alert-danger");
  }

  if (cvc.value === "") {
    missing = true;
    cvc.classList.add("alert-danger");
  }
  if (amount.value === "") {
    missing = true;
    amount.classList.add("alert-danger");
  }
  if (name.value === "") {
    missing = true;
    name.classList.add("alert-danger");
  }
  if (lastName.value === "") {
    missing = true;
    lastName.classList.add("alert-danger");
  }
  if (city.value === "") {
    missing = true;
    city.classList.add("alert-danger");
  }
  if (state.value === "") {
    missing = true;
    state.classList.add("alert-danger");
  }
  if (postalCode.value === "") {
    missing = true;
    postalCode.classList.add("alert-danger");
  }
  if (message.value === "") {
    missing = true;
    message.classList.add("alert-danger");
  }
  if (!validateText.test(name.value)) {
    missing = true;
    name.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }
  if (!validateText.test(lastName.value)) {
    missing = true;
    lastName.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }
  if (!validateText.test(city.value)) {
    missing = true;
    city.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }
  if (!validateNumber.test(card.value)) {
    missing = true;
    card.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }
  if (!validateNumber.test(cvc.value)) {
    missing = true;
    cvc.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }
  if (!validateNumber.test(amount.value)) {
    missing = true;
    amount.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }
  if (!validateNumber.test(postalCode.value)) {
    missing = true;
    postalCode.classList.add("alert-danger");
    wrong.innerHTML = "Some fields are missing or have invalid characters";
  }

  if (!missing) {
    form.submit();
  }
  if (missing) {
    wrong.style.display = "block";
  }
});