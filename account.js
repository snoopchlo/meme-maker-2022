const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const profile = document.querySelector(".account-profile");
const menu = document.querySelector("#ul");
const main = document.querySelector(".main");
const glass = document.querySelector(".glass");
//When you repeat a string, make it a variable with uppercase. -> easy to debug
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

const savedName = localStorage.getItem(USERNAME_KEY);

function onSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
  paintGreeting(username);
  paintApp();
}
function paintGreeting(username) {
  profile.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  menu.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}
function paintApp() {
  main.classList.remove(HIDDEN_CLASSNAME);
}

function handleGlassSize(e) {
  // glass.style.height = "90vh";
  // glass.style.width = "90%";
  glass.classList.add("sizeUp");
}
if (savedName === null) {
  //show the login-form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit eventlistener
  loginForm.addEventListener("submit", onSubmit);
  loginForm.addEventListener("submit", handleGlassSize);
} else {
  //show the greeting
  paintGreeting(savedName);
  paintApp();
  handleGlassSize();
}
