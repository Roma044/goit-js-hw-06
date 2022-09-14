const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  const objForm = `Email: ${email.value}, Password: ${password.value}`;
  console.log(objForm);
  event.currentTarget.reset();
}

// form.addEventListener("submit", formSubmit);
