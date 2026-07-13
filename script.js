
const perguntas = [
    {
        titulo: "Qual é a casa de Harry Potter?",
        alternativas: ["Sonserina", "Grifinória", "Corvinal", "Lufa-Lufa"],
        correta: 1
    },
    {
        titulo: "Quem é o diretor de Hogwarts?",
        alternativas: ["Snape", "Voldemort", "Dumbledore", "Hagrid"],
        correta: 2 // 
    },
    {
        titulo: "Qual feitiço serve para iluminar a varinha?",
        alternativas: ["Alohomora", "Lumos", "Expelliarmus", "Crucio"],
        correta: 1
    }
];

let perguntaAtual = 0;
let pontos = 0;


function carregarPergunta() {
    const campoPergunta = document.getElementById("pergunta");
    const campoOpcoes = document.getElementById("opcoes");
    const campoResultado = document.getElementById("resultado");

    campoResultado.innerText = "";


    if (perguntaAtual >= perguntas.length) {
        campoPergunta.innerText = "Fim do Quiz!";
        campoOpcoes.innerHTML = "";
        campoResultado.innerText = "Você acertou " + pontos + " de " + perguntas.length + " perguntas!";
        document.getElementById("btn-restart").style.display = "inline-block";
        return;
    }


    campoPergunta.innerText = perguntas[perguntaAtual].titulo;
    campoOpcoes.innerHTML = "";


    for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
        const botao = document.createElement("button");
        botao.innerText = perguntas[perguntaAtual].alternativas[i];
        botao.classList.add("botao-resposta");


        botao.onclick = function () {
            verificarResposta(i);
        };

        campoOpcoes.appendChild(botao);
    }
}


function verificarResposta(indiceClicado) {
    const respostaCorreta = perguntas[perguntaAtual].correta;

    if (indiceClicado === respostaCorreta) {
        pontos++;
        alert("Boa! Você acertou!");
    } else {
        alert("Errou! Que mancada...");
    }


    perguntaAtual++;
    carregarPergunta();
}


function reiniciarQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    document.getElementById("btn-restart").style.display = "none";
    carregarPergunta();
}


carregarPergunta();