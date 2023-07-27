document.addEventListener("click", function () {});

function darkMode() {
  var element = document.body;
  var text = document.getElementById("darkmode");
  element.classList.toggle("darkmode");
  if (text.innerHTML == "dark mode") {
    text.innerHTML = "light mode";
  } else {
    text.innerHTML = "dark mode";
  }
}
