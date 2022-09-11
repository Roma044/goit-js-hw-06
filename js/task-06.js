const inputFormEl = document.querySelector("#validation-input");

inputFormEl.addEventListener("blur", (event) => {
  if (
    event.target.value.length ===
    Number(inputFormEl.getAttribute("data-length"))
  ) {
    inputFormEl.classList.add("valid");
    inputFormEl.classList.remove("invalid");
  } else {
    inputFormEl.classList.add("invalid");
    inputFormEl.classList.remove("valid");
  }
});
