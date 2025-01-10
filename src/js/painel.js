/* JS FEITO COM PASSO A PASSO COMENTADO E DETALHADO */

/* 
    quando clicar na seta para avançar, temos que esconder todas as imagens e mostrar a próxima imagem

    a imagem atual começa em 0, que é a primeira imagem (são três elementos, a contagem começa no zero, um, dois) 
    
    assim que for clicado no avançar, eu preciso adicionar +1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe 'mostrar'
    
    mostrar a próxima imagem
        pegar todas as imagens, descobrir qual é a próxima e colocar a classe 'mostrar' nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
// const é uma palavra pra dizer que essa variável não terá seu valor modificado, sempre que possível, começar com const. caso seja necessário alterar o valor posteriormente, basta trocar o 'const' por 'let'
// o "." após 'document' serve para dizer que queremos pegar alguma propriedade desse 'document' em si
// a propriedade 'querySelectorAll' serve para pegar todos os seletores através de um parâmetro, que vai dentro dos parênteses. nesse caso, estamos atribuindo todos os elementos que tem essa classe pra dentro da variável imagens

const setaAvancar = document.getElementById('btn-avancar');
// o 'getElementById' quer dizer para buscar um elemento pelo id (o id deve ter sido criado no html e não há necessidade de usar #)
// nesse caso, está nos dando acesso a seta de avançar

const setaVoltar = document.getElementById('btn-voltar');
// o 'getElementById' quer dizer para buscar um elemento pelo id (o id deve ter sido criado no html e não há necessidade de usar #)
// nesse caso, está nos dando acesso a seta de voltar

let imagemAtual = 0;
// essa variável let será para que possamos saber em qual imagem estamos naquele momento (está como 'let' e não 'const' porque vamos alterar o valor dela)
// no javascript não é necessário colocar números em aspas

// Função para atualizar o estado das setas
function atualizarSetas() {
    if (imagemAtual === 0) {
        setaVoltar.classList.add('desativada'); // Desabilita a seta "voltar"
    } else {
        setaVoltar.classList.remove('desativada'); // Habilita a seta "voltar"
    }

    if (imagemAtual === imagensPainel.length - 1) {
        setaAvancar.classList.add('desativada'); // Desabilita a seta "avançar"
    } else {
        setaAvancar.classList.remove('desativada'); // Habilita a seta "avançar"
    }
}

// Atualizar as setas inicialmente
atualizarSetas();


// ------------------------------ CRIAÇÃO DO CÓDIGO ------------------------------

// SEGUINDO O MAPA-MENTAL FEITO NO INÍCIO DA PÁGINA DESSE JS:

// quando clicar na seta para avançar, temos que esconder todas as imagens e mostrar a próxima imagem
setaAvancar.addEventListener('click', function() {

    // length é referência ao tamanho dos paineis (que agora seria 3, pois temos 3 imagens no painel, porém colocamos -1, pois a leitura é feita a partir do 0)
    const totalDeImagens = imagensPainel.length -1;

    // o if é usado para dizer SE tal condição for igual/diferente/maior/menor (a depender do sinal escrito), então vai acontecer x coisa
    if(imagemAtual === totalDeImagens){
        // o '===' é para dizer que tudo deve ser exatamente igual (valor, tipo) do lado esquerdo e direito
        // sendo assim, ele vai rodar e comparar se a imagem atual (que é zero) é idêntico ao total de imagens (que é 3 --porém com o peso -1 vira 2)
        // após verificar que a imagem atual é diferente de 2, então ele pula esse 'if' e continua a leitura para baixo, acrescentando +1 na imagem atual e segue o fluxo descendo, até que a afirmação seja verdadeira ('true')

        return;
    }

    // a imagem atual começa em 0, que é a primeira imagem (são três elementos, a contagem começa no zero, um, dois) 
    // assim que for clicado no avançar, eu preciso adicionar +1 ao contador de imagens pra poder saber que agora eu vou mostrar a segunda imagem
    imagemAtual++;

    atualizarSetas();
    
    // esconder todas as imagens
        // pegar todas as imagens usando o DOM e remover a classe 'mostrar'
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    // mostrar a próxima imagem
        // pegar todas as imagens, descobrir qual é a próxima e colocar a classe 'mostrar' nela
    imagensPainel[imagemAtual].classList.add('mostrar')
});

// quando clicar na seta para voltar, temos que esconder todas as imagens e mostrar a imagem anterior
setaVoltar.addEventListener('click', function() {

    // assim como foi feito antes, agora também precisamos criar um if para condicionar ações e garantir uma parada (e também não existe uma imagem -1)
    if(imagemAtual === 0) {
        return;
    }

    // assim que for clicado no voltar, eu preciso decrementar -1 ao contador de imagens pra poder saber que agora eu vou mostrar a imagem anterior
    imagemAtual--;

    atualizarSetas();

    // esconder todas as imagens
     // pegar todas as imagens usando o DOM e remover a classe 'mostrar'
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    // mostrar a imagem anterior
    // pegar todas as imagens, descobrir qual é a anterior e colocar a classe 'mostrar' nela
    imagensPainel[imagemAtual].classList.add('mostrar')
});

// --------------------------------- FIM DO CÓDIGO -------------------------------


// ----------- ANOTAÇÕES DO QUE FOI FEITO NAS SETAS DE AVANÇAR E VOLTAR ----------

// chamamos a variável criada para a seta avançar e adicionamos um método que vai criar evento no botão
// utilizamos a vírgula para passar vários parâmetros pra dentro de um método (callback)

// esse método precisa saber algumas coisas:
    // 1° ele precisa saber qual evento ele vai adicionar, no nosso caso será de clique
    // 2° precisa saber o que ele vai executar, no nosso caso é uma função
    // 3° abre e feche parênteses e abre e feche chaves, para estrutar a sintaxe do código, que segue um padrão
    // 4° dentro desses parênteses e chaves vamos passar o que é pra fazer (a ação a ser feita) depois que a pessoa clicar na seta
    // 5° imagemAtual++ quer dizer que queremos que adicione 1 (assim, ele vai pegar o valor de 0 e vai adicionar +1)
    // 6° usamos o forEach para dizer que para cada elemento (nesse caso serão as imagens), será feito algo. ele vai percorrer o array, na primeira vez que passar será a primeira imagem do painel, na segunda vez que passar será a segunda imagem do painel e na terceira vez que passar será a terceira imagem do painel (e depois vai parar, pois não tem mais imagens para passar)
    // 7° ao dar um class list remove queremos dizer que é pra remover alguma propriedade, no nosso caso será uma classe
    // 8° colocando que é para remover a classe 'mostrar', ele irá agir em cada imagem do painel, removendo o 'mostrar' delas
    // 9° agora vamos pegar as imagens e fazer com que mostre a próxima. qdo temos um array (também podemos chamar de 'lista das coisas'), nós temos uma forma de acessar o índice desse array, então, ao colocar o nome da propriedade, imagensPainel + [0}, por exemplo, quer dizer que queremos acessar a primeira imagem da lista
    // 10° o que fizemos foi: na linha 75 adicionamos +1 em cada imagem, fazendo com que a imagem 0, vá pra 1, depois pra 2. Depois, na linha 81/82, removemos a classe 'mostrar' da imagem (que no html está apenas na imagem do 'projeto1'. Por fim, adicionamos novamente a classe 'mostrar', porém agora esse 'mostrar' será apenas na imagem atual, ou seja, na imagem que estiver aparecendo na tela)
    // 11° para que o js consiga fazer a leitura das imagens de forma correta (e não infinitamente), criamos uma variável especificando que o total de imagens será igual a quantidade de imagens do painel com peso de menos 1, porque a contagem inicia no 0 (ou seja, 3 = 3 - 1, total de imagens será igual a 2)
    // 12° feito isso, chamamos o 'if' e atribuimos que a imagem sendo mostrada na tela (atual) precisa ser exatamente igual ao total de imagens (2)
    // enquanto o peso for diferente de 2, a leitura do js continuará seguindo o fluxo e adicionando +1 (conforme o 10° passo)
    // chegando na imagem 2 === 2, então ele finaliza a leitura (com o return).

    // ---- na seta de VOLTAR, basicamente fizemos a mesma coisa que na de avançar, porém agora ao inverso
    // 13° para que a leitura entenda que a ação a ser dada na seta voltar é de que decaia um, então agora é feito um imagemlAtual -- (que é inverso da que usamos antes, a '++')
    // 14° também criamos um 'if' e 'return' para condicionar que, enquanto a imagem atual não for === a 0, então a leitura deve continuar, e quando for igual a zero finalize (com o return)
    // 15° abaixo, todos os comandos dados são exatamente iguais ao da seta avançar, porém agora terão valor inverso, ao invés de mostrar a próxima imagem, vão mostrar a imagem anteior

    // ---- na seta de avançar e voltar temos CÓDIGOS REPETIDOS, podemos refatorar e deixar o código mais limpo (e mais fácil de dar manutenção), criando uma função:
    // POR EXEMPLO: 
    // 
    // function esconderImagens() { 
    //      imagensPainel.forEach(imagem => {
    //          imagem.classList.remove('mostrar')
    // });
    // 
    // e depois bastar ir dentro da sintaxe (das setas, nesse caso) e chamar a função: function esconderImagens()
    // 
    // fica sem nada dentro dos parênteses, pois ela não recebe nenhum parâmetro

// --------------------------------------------------------------------------------

// console.log(setaAvancar);
// console log serve para vermos o que está acontecendo dentro do javascript na aba 'console' do computador (dentro do inspecionar) --- para escrever textos no js é necessário usar aspas simples
// o console log deve vir depois de fazer a chamada, pois a leitura é em cascata, se fizer no início do código js, ele não vai reconhecer

// --------------------------------------------------------------------------------

// dentro dos parênteses colocamos parâmetros
// dentro das chaves são os blocos de execução
// porém tudo depende do contexto que estamos criando, não há um padrão único