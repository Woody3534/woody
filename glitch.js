document.querySelectorAll(".glitch-hover").forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.classList.add("glitch-active");

    setTimeout(() => {
      el.classList.remove("glitch-active");
    }, 150);
  });
});