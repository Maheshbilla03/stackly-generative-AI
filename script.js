window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 1500);
});


const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = hamburger.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPasswordError").innerText = "";

    if (email === "") {
      document.getElementById("loginEmailError").innerText = "Email is required";
      return;
    }

    if (password === "") {
      document.getElementById("loginPasswordError").innerText = "Password is required";
      return;
    }

    alert("Login successful");
    window.location.href = "index.html";
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let address = document.getElementById("address").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let plan = document.getElementById("plan").value;
    let error = document.getElementById("signupError");

    error.innerText = "";

    if (name === "" || email === "" || address === "" || password === "" || confirmPassword === "" || plan === "") {
      error.innerText = "Please fill all fields";
      return;
    }

    if (password !== confirmPassword) {
      error.innerText = "Passwords do not match";
      return;
    }

    alert("Account created successfully");
    window.location.href = "login.html";
  });
}