document.onkeydown = function (key) {
  if (event.keyCode == 123) {
    return false;
  }

  if (key.ctrlKey && key.shiftKey && key.keyCode == "I".charCodeAt(0)) {
    return false;
  }

  if (key.ctrlKey && key.shiftKey && key.keyCode == "C".charCodeAt(0)) {
    return false;
  }

  if (key.ctrlKey && key.shiftKey && key.keyCode == "J".charCodeAt(0)) {
    return false;
  }

  if (key.ctrlKey && key.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

document.addEventListener("contextmenu", (key) => key.preventDefault());

document.addEventListener("developertools", (key) => key.preventDefault());

document.addEventListener("inspect_element", (key) => key.preventDefault());
