const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "se vocẽ ver o Lula ganhando a eleisão tenovo qual seria sua reação",
    alternativas: [
        "Brava",
        "Feliz"
    ]
},
{
    enunciado: "Vocẽ entra no zoologico mas ta na hora de fechar mais o dono falou que vocẽ pode ver so um animal qual é a sua escolha",
    alternativas: [
        "elefantes",
        "girafas"
    ]
},
{
    enunciado: "vocẽ ganha duas viagens uma para ir no havai e a outra ir para os estados unito, mas vocẽ tenque escolher só uma, qual vocẽ iria escolher",
    alternativas: [
        "Havai",
        "Estados unidos"
    ]
},
{
    enunciado: "qual das duas professoras vocẽ escolheria para não ter mais aula com ela",
    alternativas: [
        "CARLA KUHN GRAUNKE",
        "JUCIMARA ZANELATO"
    ]
},
{
    enunciado: "qual bicho de estimação você escolheria",
    alternativas: [
        "Cachorro",
        "Gato"
    ]
    },
];    

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
