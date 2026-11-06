// OUR LITTLE CIRCLE — interaksi dan animasi ringan
document.addEventListener("DOMContentLoaded", () => {
  // Tahun otomatis di footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Animasi elemen ketika masuk ke layar
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  // Menu navigasi untuk layar HP
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Efek cahaya mengikuti mouse (hanya perangkat dengan pointer)
  const glow = document.querySelector(".cursor-glow");
  if (glow && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  }
});
