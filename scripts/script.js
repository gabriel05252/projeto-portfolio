const botaoTema = document.getElementById('botao-tema');
const body = document.body;

/* =========================
   DARK MODE
========================= */

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'escuro') {
    body.classList.add('escuro');
    botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

botaoTema.addEventListener('click', function (e) {
    e.preventDefault();

    body.classList.toggle('escuro');

    if (body.classList.contains('escuro')) {
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('tema', 'escuro');
    } else {
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('tema', 'claro');
    }
});


/* =========================
   ROLAGEM SUAVE
========================= */

const links = document.querySelectorAll('#menu a.link');

links.forEach(link => {
    link.addEventListener('click', function (e) {

        const destino = this.getAttribute('href');

        if (destino.startsWith('#')) {
            e.preventDefault();

            const secao = document.querySelector(destino);

            if (secao) {
                const header = document.querySelector('header');
                const alturaHeader = header.offsetHeight;

                const posicao = secao.offsetTop - alturaHeader;

                window.scrollTo({
                    top: posicao,
                    behavior: 'smooth'
                });
            }
        }
    });
});
