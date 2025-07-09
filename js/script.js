// Script.js

// Wait for DOMContentLoaded to ensure elements exist
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const burger = document.querySelector(".mobile-menu");
  const menu = document.querySelector("nav ul");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      burger.setAttribute("aria-expanded", menu.classList.contains("active"));
    });
  }

  // Cart functionality
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const countElement = document.querySelector(".cart-count");
      let count = parseInt(countElement.textContent, 10) || 0;
      countElement.textContent = count + 1;

      // Animation feedback
      const originalText = button.textContent;
      button.textContent = "Ajouté !";
      button.style.backgroundColor = "#8b5cf6";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = "";
      }, 1500);
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // CTA button functionality
  const cta = document.querySelector(".hero .cta-button");
  const categoriesSection = document.querySelector(".categories");
  if (cta && categoriesSection) {
    cta.addEventListener("click", () => {
      categoriesSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
