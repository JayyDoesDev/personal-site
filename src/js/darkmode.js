document.addEventListener("click", function () {});

function darkMode() {
  var element = document.body;
  var text = document.getElementById("darkmode");
  element.classList.toggle("darkmode");
  element.classList.toggle("theme-light");
  if (text.innerHTML == "light mode") {
    text.innerHTML = "dark mode";
  } else {
    text.innerHTML = "light mode";
  }
}
