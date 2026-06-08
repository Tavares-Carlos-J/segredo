// Corações flutuantes animados
(function() {
  const hearts = ['💖','💗','💓','💝','💕','🌸','✨','💞'];
  const container = document.getElementById('floatingHearts');
  if (!container) return;

  function spawnHeart() {
    const el = document.createElement('span');
    el.className = 'heart-float';
    el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    el.style.left = Math.random() * 100 + 'vw';
    const duration = 6 + Math.random() * 8;
    const delay    = Math.random() * 4;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay   = delay + 's';
    el.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
    container.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay) * 1000);
  }

  // Partículas de fundo
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left     = Math.random() * 100 + 'vw';
      p.style.animationDuration = (8 + Math.random() * 10) + 's';
      p.style.animationDelay   = (Math.random() * 8) + 's';
      p.style.width  = (4 + Math.random() * 6) + 'px';
      p.style.height = p.style.width;
      particlesContainer.appendChild(p);
    }
  }

  // Spawn inicial
  for (let i = 0; i < 6; i++) spawnHeart();
  setInterval(spawnHeart, 1200);
})();
