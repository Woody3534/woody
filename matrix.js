const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width, height;
let columns;
let drops = [];

const fontSize = 16;
const characters =
  "アァカサタナハマヤャラワガザダバパ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  columns = Math.floor(width / fontSize);
  drops = Array(columns).fill(0);
}

window.addEventListener("resize", resize);
resize();

function draw() {
  // Fade effect (controls trail length)
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, width, height);

  const isRed = document.body.classList.contains("red-mode");

	ctx.fillStyle = isRed
	  ? "rgba(255, 60, 60, 0.8)"
	  : "rgba(0, 255, 136, 0.8)";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text =
      characters[Math.floor(Math.random() * characters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reset drop randomly after it passes bottom
    if (y > height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(draw);
}

draw();
