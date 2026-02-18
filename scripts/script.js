const botao = document.getElementById('botao-tema');
const body = document.body;

// ====== Persistência do tema ======
const temaSalvo = localStorage.getItem('tema');
aplicarTema(temaSalvo === 'escuro');

function aplicarTema(escuro) {
  if (escuro) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isEscuro = body.classList.toggle('escuro');
  aplicarTema(isEscuro);
  localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
});


// ====== Scroll suave ======
const navLinks = document.querySelectorAll('#menu a.link');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (href && href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;

        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});
