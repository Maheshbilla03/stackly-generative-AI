const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if(email.value.trim() === ""){
    emailError.textContent = "Email is required";
    valid = false;
  }

  if(password.value.trim() === ""){
    passwordError.textContent = "Password is required";
    valid = false;
  }else if(password.value.length < 6){
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if(valid){
    alert("Login successful!");
    window.location.href = "index.html";
  }
});