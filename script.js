window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hide");
    }, 1500);
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    document.getElementById("loginEmailError").innerText = "";
    document.getElementById("loginPasswordError").innerText = "";

    if (email.value.trim() === "") {
      document.getElementById("loginEmailError").innerText = "Email is required";
      return;
    }

    if (password.value.trim() === "") {
      document.getElementById("loginPasswordError").innerText = "Password is required";
      return;
    }

    alert("Login successful");
    window.location.href = "index.html";
  });
}
