const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Liquid Ether background adapted from provided code
const canvas = document.getElementById('liquid-ether');
const ctx = canvas.getContext('2d');
let mouseX = 0, mouseY = 0;
const colors = ['#5227FF', '#FF9FFC', '#B19EEF'];
const mouseForce = 20;
const cursorSize = 100;
const autoSpeed = 0.5;
const autoIntensity = 2.2;
const numBlobs = 15;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Blob {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = 20 + Math.random() * 20;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.phase = Math.random() * Math.PI * 2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.phase += 0.02;
    this.radius = 20 + Math.sin(this.phase) * 10;

    if (this.x < this.radius || this.x > canvas.width - this.radius) this.vx *= -1;
    if (this.y < this.radius || this.y > canvas.height - this.radius) this.vy *= -1;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < cursorSize) {
      const force = (cursorSize - dist) / cursorSize * mouseForce;
      this.vx += (dx / dist) * force;
      this.vy += (dy / dist) * force;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.strokeStyle = this.color + '80';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

let blobs = [];
function initBlobs() {
  blobs = [];
  for (let i = 0; i < numBlobs; i++) {
    blobs.push(new Blob());
  }
}

initBlobs();

// Auto movement simulation
let autoActive = true;
let target = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
let current = { x: 0, y: 0 };
let lastTime = performance.now();

function updateAuto() {
  const now = performance.now();
  let dt = (now - lastTime) / 1000;
  lastTime = now;
  if (dt > 0.2) dt = 0.016;

  const dx = target.x - current.x;
  const dy = target.y - current.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 0.01) {
    target = { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
    return;
  }

  const dirX = dx / dist;
  const dirY = dy / dist;
  const step = autoSpeed * dt;
  const move = Math.min(step, dist);
  current.x += dirX * move;
  current.y += dirY * move;

  mouseX = (current.x + 1) / 2 * canvas.width;
  mouseY = (-current.y + 1) / 2 * canvas.height;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(0.5, colors[1]);
  gradient.addColorStop(1, colors[2]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (autoActive) updateAuto();

  blobs.forEach(blob => {
    blob.update();
    blob.draw();
  });

  for (let i = 0; i < blobs.length; i++) {
    for (let j = i + 1; j < blobs.length; j++) {
      const dx = blobs[i].x - blobs[j].x;
      const dy = blobs[i].y - blobs[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(blobs[i].x, blobs[i].y);
        ctx.lineTo(blobs[j].x, blobs[j].y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - dist / 150})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  autoActive = false;
});

canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
  autoActive = false;
});

canvas.addEventListener('mouseleave', () => {
  setTimeout(() => { autoActive = true; }, 1000);
});

animate();
console.log('Liquid Ether tło załadowane – wygląda jak z Matrixa, co nie?');
