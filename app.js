let theme;
// Function to set the theme of our website
function setTheme() {
  getTheme();
  // change theme from dark to light  and vice versa, depending what it is currently set to

  if (theme === "light") {
    localStorage.setItem("theme", "dark");
    document.body.setAttribute("class", "dark");
  } 
  else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }

  // this should happen when i click the button
}

// function to get the current theme of our website
function getTheme() {
  theme = localStorage.getItem("theme");
}
setTheme();
