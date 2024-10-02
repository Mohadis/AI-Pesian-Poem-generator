function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "I was a little girl when I travel here..",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#form-poem-genetrator");
formElement.addEventListener("submit", generatePoem);
