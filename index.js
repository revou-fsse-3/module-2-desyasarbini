// fungsi untuk mengklik yg di tuju
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

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

function toggleMenu() {
  var menu = document.getElementsByClassName("toggle");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
