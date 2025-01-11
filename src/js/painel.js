const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');

let imagemAtual = 0;

function atualizarSetas() {
    if (imagemAtual === 0) {
        setaVoltar.classList.add('desativada');
    } else {
        setaVoltar.classList.remove('desativada');
    }

    if (imagemAtual === imagensPainel.length - 1) {
        setaAvancar.classList.add('desativada');
    } else {
        setaAvancar.classList.remove('desativada');
    }
}

atualizarSetas();

// ------------------------------------------------------------

setaAvancar.addEventListener('click', function() {
    const totalDeImagens = imagensPainel.length -1;

    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;

    atualizarSetas();
    
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar')
});

setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    atualizarSetas();

    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    imagensPainel[imagemAtual].classList.add('mostrar')
});

// ------------------------------------------------------------