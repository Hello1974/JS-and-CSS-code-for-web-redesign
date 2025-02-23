document.addEventListener("DOMContentLoaded", function () {

  // Navbar Toggle for Small Screens
  const navToggle = document.getElementById("navToggle");
  const navList = document.querySelector(".nav-buttons");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navList.classList.toggle("show");
    });
  }

  // Image Slideshow for Exhibitions
  let currentSlide = 0;
  const exhibitionCards = document.querySelectorAll(".exhibition-card");

  function showNextSlide() {
    exhibitionCards[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % exhibitionCards.length;
    exhibitionCards[currentSlide].classList.add("active");
  }

  if (exhibitionCards.length > 0) {
    exhibitionCards[0].classList.add("active"); // Show the first slide initially
    setInterval(showNextSlide, 3000); // Change slide every 3 seconds
  }

  // Dark Mode Toggle
  const darkModeBtn = document.createElement("button");
  darkModeBtn.innerText = "🌙 Dark Mode";
  darkModeBtn.id = "darkModeBtn";
  darkModeBtn.style.position = "fixed";
  darkModeBtn.style.top = "10px";
  darkModeBtn.style.right = "10px";
  darkModeBtn.style.padding = "10px";
  darkModeBtn.style.zIndex = "1000";
  document.body.appendChild(darkModeBtn);

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.innerText = "☀ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      darkModeBtn.innerText = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  }

  darkModeBtn.addEventListener("click", toggleDarkMode);

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.innerText = "☀ Light Mode";
  }
});
