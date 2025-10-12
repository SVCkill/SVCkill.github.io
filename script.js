// Toggle menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Sticky header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Liquid background effect (optional)
const canvas = document.getElementById('liquid-ether');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const blobs = [];
for (let i = 0; i < 10; i++) {
  blobs.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 80 + 50,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let blob of blobs) {
    const gradient = ctx.createRadialGradient(blob.x, blob.y, blob.r * 0.2, blob.x, blob.y, blob.r);
    gradient.addColorStop(0, 'rgba(0, 255, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
    ctx.fill();

    blob.x += blob.dx;
    blob.y += blob.dy;

    if (blob.x < 0 || blob.x > canvas.width) blob.dx *= -1;
    if (blob.y < 0 || blob.y > canvas.height) blob.dy *= -1;
  }
  requestAnimationFrame(draw);
}

draw();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
