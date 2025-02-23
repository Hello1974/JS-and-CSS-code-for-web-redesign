document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle for Small Screens
  const navToggle = document.querySelector(".dropbtn"); // Use the dropdown button
  const dropdownContent = document.querySelector(".dropdown-content"); // Dropdown content

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      dropdownContent.classList.toggle("show"); // Toggle visibility of the dropdown content
    });
  }

  // Hide the dropdown menu on larger screens
  function adjustDropdownVisibility() {
    if (window.innerWidth > 768) {
      dropdownContent.classList.remove("show"); // Hide the dropdown content
      navToggle.style.display = "none"; // Hide the toggle button
    } else {
      navToggle.style.display = "block"; // Show the toggle button on small screens
    }
  }

  // Check screen size on load and resize
  adjustDropdownVisibility();
  window.addEventListener("resize", adjustDropdownVisibility);

  // Image Slideshow for Exhibitions
  let currentSlide = 0;
  const exhibitionCards = document.querySelectorAll(".exhibition-card");

  function showNextSlide() {
    exhibitionCards[currentSlide].classList.remove("active"); // Hide the current slide
    currentSlide = (currentSlide + 1) % exhibitionCards.length; // Move to the next slide
    exhibitionCards[currentSlide].classList.add("active"); // Show the new current slide
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
  document.body.appendChild(darkModeBtn); // Append the button to the body

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class
    document.documentElement.classList.toggle("dark-mode"); // Toggle dark mode class on the root element

    // Update button text and save the theme preference
    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.innerText = "☀ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      darkModeBtn.innerText = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  }

  darkModeBtn.addEventListener("click", toggleDarkMode); // Add click event to toggle dark mode

  // Apply saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode"); // Enable dark mode if saved
    darkModeBtn.innerText = "☀ Light Mode"; // Update button text
  }
});
