document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const icon = themeToggle.querySelector("i");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.className = savedTheme;
    updateIcon(savedTheme === "dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    const isDarkMode = body.classList.contains("dark-mode");
    body.className = isDarkMode ? "light-mode" : "dark-mode";
    localStorage.setItem("theme", isDarkMode ? "light-mode" : "dark-mode");
    updateIcon(!isDarkMode);
  });

  function updateIcon(isDarkMode) {
    icon.className = isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }
});
