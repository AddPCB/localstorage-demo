let theme;
// Function to set the theme of our website
function setTheme() {
  getTheme();
  // change theme from dark to light  and vice versa, depending what it is currently set to

  if (theme === "light") {
    localStorage.setItem("theme", "dark")
// apply the dark class
    document.body.classList.add("dark");
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
// Create a new class called dark to invert background colour
document.styleSheets[0].insertRule(".dark { background-color: invert(100%); }", 0);
// hook setTheme to the first button on the page
document.querySelector("button").setAttribute("onClick", "setTheme()");
// populate 'theme' by running the 'else' path of setTheme 
setTheme();
