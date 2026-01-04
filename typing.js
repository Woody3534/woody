document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".typing").forEach(el => {
    const text = el.dataset.text;
    let index = 0;
    el.textContent = "";

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
      }
    }

    type();
  });
});