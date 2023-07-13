document.addEventListener("click", function () {});

function darkMode() {
  var element = document.body;
  var text = document.getElementById("darkmode");
  element.classList.toggle("darkmode");
  if (text.innerHTML == "light mode") {
    text.innerHTML = "dark mode";
  } else {
    text.innerHTML = "light mode";
  }
}
