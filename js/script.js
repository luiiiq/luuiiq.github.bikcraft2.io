// Ativar links do menu
const links = document.querySelectorAll('.menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    
    if(url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll('.paragrafo');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const control = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(control);
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}


perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll('.magic-img img');
const galeriaGrid = document.querySelector('.magic-img');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width:1000px)').matches;
    if(media) {
        galeriaGrid.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if(window.SimpleAnime) {
    new SimpleAnime();
}