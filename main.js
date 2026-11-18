const toggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#site-nav");
const header = document.querySelector("#site-header");
const year = document.querySelector("#year");

if (year) year.textContent = String(new Date().getFullYear());

function setOpen(open) {
  nav.classList.toggle("open", open);
  toggle.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
  toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
}

toggle.addEventListener("click", () => {
  setOpen(!nav.classList.contains("open"));
});

document.querySelectorAll("[data-close]").forEach((link) => {
  link.addEventListener("click", () => setOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setOpen(false);
});

function onScroll() {
  header.classList.toggle("is-stuck", window.scrollY > 8);
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
