// Offset for the header height
const headerOffset = document.querySelector("header").offsetHeight;

// Scroll to anchor links with a smooth animation
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    const targetOffset = target.offsetTop - headerOffset;
    window.scrollTo({
      top: targetOffset,
    });
  });
});

