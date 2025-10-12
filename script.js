// LIQUID ETHER
const canvas = document.getElementById('liquid-ether');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let width = canvas.width;
let height = canvas.height;
const blobs = [];
for (let i = 0; i < 6; i++) {
  blobs.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 150 + 100,
    dx: (Math.random() - 0.5) * 1.2,
    dy: (Math.random() - 0.5) * 1.2
  });
}
function drawBlobs() {
  ctx.clearRect(0, 0, width, height);
  for (const b of blobs) {
    const gradient = ctx.createRadialGradient(b.x, b.y, b.r * 0.2, b.x, b.y, b.r);
    gradient.addColorStop(0, 'rgba(0,255,255,0.3)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
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

// TYPEWRITER
function typeEffect(el, texts, typingSpeed = 80, backSpeed = 40, pause = 1200) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = texts[textIndex];
    const part = current.substring(0, charIndex);
    el.querySelector('.typed-text').innerText = part;

    if (!isDeleting) {
      charIndex++;
      if (charIndex > current.length) {
        isDeleting = true;
        setTimeout(type, pause);
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

    const delay = isDeleting ? backSpeed : typingSpeed;
    setTimeout(type, delay);
  }
  type();
}
document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('typing-target');
  if (target) {
    typeEffect(target, [
      'Xeterion Anti Malware',
      'Real-Time Protection',
      'System Cleaner',
      'Zero-Day Shield'
    ]);
  }
});

// TARGET CURSOR
const cursor = document.getElementById('target-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
