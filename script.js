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
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const target = counter.innerText;

  counter.addEventListener("mouseenter", () => {
    counter.style.transform = "scale(1.1)";
    counter.style.transition = "0.3s ease";
  });

  counter.addEventListener("mouseleave", () => {
    counter.style.transform = "scale(1)";
  });

});
// PRELOADER
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 1500);
});

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger) {
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
}

// CLOSE MENU WHEN CLICK LINKS
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");

    const icon = hamburger.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// HERO IMAGE SLIDER
const heroImages = [
  "hero1.jpg",
  "hero2.jpg",
  "hero3.jpg",
  "hero4.jpg"
];

let heroIndex = 0;

const heroBg = document.querySelector(".hero-bg");

function changeHeroImage() {
  if (heroBg) {
    heroBg.style.opacity = 0;

    setTimeout(() => {
      heroBg.src = heroImages[heroIndex];

      heroBg.style.opacity = 1;

      heroIndex++;

      if (heroIndex >= heroImages.length) {
        heroIndex = 0;
      }
    }, 500);
  }
}

setInterval(changeHeroImage, 4000);

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".card, .feature-card, .testimonial-card, .career-box, .about-card, .stat-item"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// AUTO MOVING SERVICE CARDS
const cardsContainer = document.querySelector(".grid");

let autoScroll = 0;

function autoMoveCards() {
  if (cardsContainer) {
    autoScroll += 1;

    cardsContainer.scrollLeft = autoScroll;

    if (autoScroll >= cardsContainer.scrollWidth - cardsContainer.clientWidth) {
      autoScroll = 0;
    }
  }
}

setInterval(autoMoveCards, 30);

// TESTIMONIAL AUTO SLIDER
const testimonials = document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function showTestimonials() {
  testimonials.forEach((card, index) => {
    card.style.display = "none";

    if (index === testimonialIndex) {
      card.style.display = "block";
    }
  });

  testimonialIndex++;

  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }
}

if (window.innerWidth <= 768) {
  showTestimonials();
  setInterval(showTestimonials, 3000);
}

// LOGIN FORM VALIDATION
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let emailError = document.getElementById("loginEmailError");
    let passwordError = document.getElementById("loginPasswordError");

    emailError.innerText = "";
    passwordError.innerText = "";

    let valid = true;

    if (email === "") {
      emailError.innerText = "Email is required";
      valid = false;
    }

    if (password === "") {
      passwordError.innerText = "Password is required";
      valid = false;
    }

    if (valid) {
      alert("Login Successful");
      loginForm.reset();
    }
  });
}

// SIGNUP FORM VALIDATION
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created Successfully");
    signupForm.reset();
  });
}

// SUBSCRIBE FORM
const subscribeForm = document.querySelector(".subscribe-form");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = subscribeForm.querySelector("input");

    if (emailInput.value.trim() === "") {
      alert("Please enter your email");
    } else {
      alert("Subscribed Successfully");
      emailInput.value = "";
    }
  });
}

// BACK TO TOP BUTTON
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// MOUSE CURSOR EFFECT
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// ACTIVE NAVBAR ON SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "#020617";
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.45)";
    navbar.style.boxShadow = "none";
  }
});