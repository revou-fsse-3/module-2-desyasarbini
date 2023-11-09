// fungsi untuk mengklik yg di tuju
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const menuToggle = document.querySelector(".menu-toggle input");
const navBar = document.querySelector(".nav-bar ul");
const toggle = document.getElementById("toggle-dark");
const body = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode");

// fungsi u/ mendapatkan value (data) dari login form
const submitform = (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log({
    email,
    password,
  });
};

// fungsi untuk mendapatkan value (data) dari signup form
const submitformSignup = (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email_signup = document.getElementById("email_signup").value;
  const password_signup = document.getElementById("password_signup").value;
  console.log({
    username,
    email_signup,
    password_signup,
  });
};

// signup diform : fungsi yg menampilkan signup form saat diklik
signupLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

// login diform : fungsi yg menghilangkn signup form
// dan memunculkan kembali login form saat diklik
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// btn login header : form muncul ketika diklik
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

// btn close akan menutup form ketika diklik
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// Menu bar ketika di klik
menuToggle.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

// fungsi untuk local storage
function setInitialState() {
  if (darkMode === "on") {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// dark-mode
function enableDarkMode() {
  body.style.background = "#112a3b";
  body.style.color = "white";
  body.style.transition = "2s";
  darkMode = "on";
  localStorage.setItem("dark-mode", "on");
  toggle.classList.remove("fa-moon");
  toggle.classList.add("fa-sun");
}

// light-mode
function enableLightMode() {
  body.style.background = "white";
  body.style.color = "#112a3b";
  body.style.transition = "2s";
  darkMode = "off";
  localStorage.setItem("dark-mode", "off");
  toggle.classList.remove("fa-sun");
  toggle.classList.add("fa-moon");
}

// set the initial state
setInitialState();

// toggle dark mode ketika di klik
toggle.addEventListener("click", function () {
  if (darkMode === "on") {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});
