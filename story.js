// story.js — lógica de revelar e temporizar os botões

function reveal() {
  const btn        = document.getElementById('btnReveal');
  const revealArea = document.getElementById('revealArea');
  const navButtons = document.getElementById('navButtons');

  if (!btn || !revealArea) return;

  // Desabilita o botão
  btn.disabled = true;
  btn.style.transform = 'scale(0.9)';
  btn.style.opacity   = '0.6';

  // Anima o botão e mostra o conteúdo
  setTimeout(() => {
    btn.style.transition = 'all 0.5s ease';
    btn.style.transform  = 'scale(0)';
    btn.style.opacity    = '0';
  }, 100);

  setTimeout(() => {
    btn.style.display = 'none';
    revealArea.classList.add('visible');
  }, 600);

  // Botões de navegação aparecem após 6 segundos
  if (navButtons) {
    setTimeout(() => {
      navButtons.classList.add('visible');
    }, 6000);
  }
}
