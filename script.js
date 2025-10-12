// — Toggle menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// — Nagłówek zmiana przy scrollu
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// — Efekt pisania (typewriter)
function typeEffect(element, texts, typingSpeed = 100, backspaceSpeed = 50, pauseTime = 1500) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = texts[textIndex];
    const part = current.substring(0, charIndex);
    element.querySelector('.typed-text').innerText = part;

    if (!isDeleting) {
      charIndex++;
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
        return;
      }
    }

    const delay = isDeleting ? backspaceSpeed : typingSpeed;
    setTimeout(type, delay);
  }

  type();
}

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('typing-target');
  if (target) {
    typeEffect(target, [
      "Xeterion Anti Malware",
      "Zabezpiecz Twój cyfrowy świat",
      "Bo hakerzy nas nienawidzą",
      "Najwyższa klasa ochrony"
    ], 120, 60, 2000);
  }
});

// — Tło animowane (gradienty + poruszające się blobsy)
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const blobs = [];
const blobCount = 8;

for (let i = 0; i < blobCount; i++) {
  blobs.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 100 + 50,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5
  });
}

function drawBlobs() {
  ctx.clearRect(0, 0, width, height);

  for (let b of blobs) {
    const grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.1, b.x, b.y, b.r);
    grad.addColorStop(0, "rgba(0, 255, 255, 0.4)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.fill();

    b.x += b.dx;
    b.y += b.dy;
    if (b.x < -b.r) b.x = width + b.r;
    if (b.x > width + b.r) b.x = -b.r;
    if (b.y < -b.r) b.y = height + b.r;
    if (b.y > height + b.r) b.y = -b.r;
  }

  requestAnimationFrame(drawBlobs);
}

drawBlobs();

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
