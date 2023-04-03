document.addEventListener("click", (key) => {
  document.get;
});

function darkMode() {
  var element = document.body;
  var button = document.getElementById("darkmodeButton");
  element.classList.toggle("darkmode");
  if (button.innerHTML == "Light Mode") {
    button.innerHTML = "Dark Mode";
  } else {
    button.innerHTML = "Light Mode";
  }
}
