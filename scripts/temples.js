document.addEventListener("DOMContentLoaded", () => {
  // Footer: Current Year and Last Modified
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;

  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = lastModified;

  // Hamburger Menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active"); // Toggle the 'active' class
    hamburger.textContent = navMenu.classList.contains("active") ? "X" : "☰"; // Change button content
  });
});
