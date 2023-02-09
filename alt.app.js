// reference solution for app.js
function setTheme() {
  if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
}

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", setTheme);

function getTheme() {}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

getTheme();
