// FASE 1 : DESAFIOS USANDO REGRA DE INFERÊNCIA
var desafio_1 = {
    fase: 1,
    pergunta: "O explorador descobriu que, sempre que o tesouro está na Ilha Esmeralda, o baú fica próximo da palmeira dourada. Como foi confirmado que o tesouro realmente está na Ilha Esmeralda, qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) O baú está escondido na praia.",
        "b) O baú está próximo da palmeira dourada.",
        "c) O tesouro não está na Ilha Esmeralda.",
        "d) A palmeira dourada foi destruída.",
        "e) Não é possível concluir."
    ],
    resposta: "b"
};

var desafio_2 = {
    fase: 1,
    pergunta: "Sempre que um vulcão está em atividade, uma grande coluna de fumaça pode ser vista na ilha. Hoje não há fumaça na ilha. Qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) O vulcão está em atividade.",
        "b) O vulcão não está em atividade.",
        "c) Existe um terremoto na ilha.",
        "d) O tesouro foi encontrado.",
        "e) Não é possível concluir."
    ],
    resposta: "b"
};

var desafio_3 = {
    fase: 1,
    pergunta: "O mapa indica que o tesouro está na Ilha Cristal ou na Ilha Esmeralda. Após uma busca completa, descobriu-se que ele não está na Ilha Cristal. Onde o tesouro está?",
    alternativas: [
        "a) Ilha Vulcão.",
        "b) Ilha Fantasma.",
        "c) Ilha Esmeralda.",
        "d) O tesouro não está em nenhuma ilha.",
        "e) Não é possível concluir."
    ],
    resposta: "c"
};

var desafio_4 = {
    fase: 1,
    pergunta: "Sempre que existe uma caverna escondida, há ouro enterrado. Sempre que há ouro enterrado, o mapa aponta para essa ilha. Como o mapa não aponta para a ilha, qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) Existe uma caverna escondida.",
        "b) Não existe uma caverna escondida.",
        "c) Existe ouro enterrado.",
        "d) O mapa está errado.",
        "e) Não é possível concluir."
    ],
    resposta: "b"
};

var desafio_5 = {
    fase: 1,
    pergunta: "Sempre que o tesouro está na Ilha Fantasma, existe uma chave prateada. Sempre que existe uma chave prateada, há uma passagem secreta. Sempre que existe uma passagem secreta, o baú fica dentro da caverna antiga. Como o baú não está dentro da caverna antiga, qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) O tesouro está na Ilha Fantasma.",
        "b) O tesouro não está na Ilha Fantasma.",
        "c) Existe uma passagem secreta.",
        "d) Existe uma chave prateada.",
        "e) Não é possível concluir."
    ],
    resposta: "b"
};

var desafio_6 = {
    fase: 1,
    pergunta: "Sempre que o tesouro está na Ilha Esmeralda e a chave dourada é encontrada, o baú pode ser aberto. Sabe-se que o tesouro está na Ilha Esmeralda e que a chave dourada foi encontrada. Qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) O baú pode ser aberto.",
        "b) O baú permanece fechado.",
        "c) O tesouro está na Ilha Fantasma.",
        "d) A chave dourada desapareceu.",
        "e) Não é possível concluir."
    ],
    resposta: "a"
};

var desafio_7 = {
    fase: 1,
    pergunta: "Sempre que o guardião está dormindo, o portal fica aberto. Sempre que o portal está aberto, o explorador consegue entrar. Como o explorador não conseguiu entrar, qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) O guardião está dormindo.",
        "b) O portal está aberto.",
        "c) O guardião não está dormindo.",
        "d) O explorador encontrou o tesouro.",
        "e) Não é possível concluir."
    ],
    resposta: "c"
};

var desafio_8 = {
    fase: 1,
    pergunta: "Sempre que o mapa é verdadeiro, o tesouro está na Ilha Esmeralda ou na Ilha Cristal. Sabe-se que o mapa é verdadeiro e que o tesouro não está na Ilha Cristal. Qual conclusão é necessariamente verdadeira?",
    alternativas: [
        "a) O tesouro está na Ilha Vulcão.",
        "b) O tesouro está na Ilha Esmeralda.",
        "c) O mapa é falso.",
        "d) O tesouro não existe.",
        "e) Não é possível concluir."
    ],
    resposta: "b"
};

// FASE 2: Simbolização Lógica

var desafio_f2_1 = {
    fase: 2,
    frase: "Se o tesouro está na ilha, então o mapa é verdadeiro.",
    legenda: { P: "o tesouro está na ilha", Q: "o mapa é verdadeiro" },
    alternativas: [
        "a) P ∧ Q",
        "b) P → Q",
        "c) ¬P → Q",
        "d) P ↔ Q",
        "e) P ∨ Q"
    ],
    resposta: "b",
    explicacao: "\"Se P, então Q\" é a forma clássica do condicional: <strong>P → Q</strong>."
};

var desafio_f2_2 = {
    fase: 2,
    frase: "O guardião está dormindo e o portal está aberto.",
    legenda: { P: "o guardião está dormindo", Q: "o portal está aberto" },
    alternativas: [
        "a) P → Q",
        "b) P ∨ Q",
        "c) P ∧ Q",
        "d) ¬P ∧ Q",
        "e) P ↔ Q"
    ],
    resposta: "c",
    explicacao: "\"P e Q\" expressa uma conjunção: <strong>P ∧ Q</strong>."
};

var desafio_f2_3 = {
    fase: 2,
    frase: "O tesouro está na Ilha Cristal ou na Ilha Esmeralda.",
    legenda: { P: "o tesouro está na Ilha Cristal", Q: "o tesouro está na Ilha Esmeralda" },
    alternativas: [
        "a) P ∧ Q",
        "b) ¬P ∨ Q",
        "c) P → Q",
        "d) P ∨ Q",
        "e) ¬P ∧ ¬Q"
    ],
    resposta: "d",
    explicacao: "\"P ou Q\" expressa uma disjunção: <strong>P ∨ Q</strong>."
};

var desafio_f2_4 = {
    fase: 2,
    frase: "Não há fumaça na ilha.",
    legenda: { P: "há fumaça na ilha" },
    alternativas: [
        "a) P",
        "b) P ∧ P",
        "c) ¬P",
        "d) P → ¬P",
        "e) P ∨ ¬P"
    ],
    resposta: "c",
    explicacao: "\"Não P\" é a negação de P: <strong>¬P</strong>."
};

var desafio_f2_5 = {
    fase: 2,
    frase: "O baú pode ser aberto se e somente se a chave dourada foi encontrada.",
    legenda: { P: "o baú pode ser aberto", Q: "a chave dourada foi encontrada" },
    alternativas: [
        "a) P → Q",
        "b) Q → P",
        "c) P ∧ Q",
        "d) P ↔ Q",
        "e) ¬P ↔ ¬Q"
    ],
    resposta: "d",
    explicacao: "\"P se e somente se Q\" é o bicondicional: <strong>P ↔ Q</strong>."
};

var desafio_f2_6 = {
    fase: 2,
    frase: "Se o vulcão não está em atividade, então não há fumaça.",
    legenda: { P: "o vulcão está em atividade", Q: "há fumaça" },
    alternativas: [
        "a) P → Q",
        "b) ¬P → ¬Q",
        "c) ¬Q → ¬P",
        "d) P ∧ ¬Q",
        "e) ¬P ∨ Q"
    ],
    resposta: "b",
    explicacao: "\"Se não P, então não Q\" simboliza-se como <strong>¬P → ¬Q</strong>."
};

var desafio_f2_7 = {
    fase: 2,
    frase: "Existe uma caverna escondida e, se ela existe, o ouro está enterrado.",
    legenda: { P: "existe uma caverna escondida", Q: "o ouro está enterrado" },
    alternativas: [
        "a) P ∨ (P → Q)",
        "b) P ∧ (P → Q)",
        "c) P → (P ∧ Q)",
        "d) (P ∧ Q) → P",
        "e) P ↔ Q"
    ],
    resposta: "b",
    explicacao: "A frase afirma duas coisas juntas: P é verdadeiro, <em>e</em> P → Q. Isso é <strong>P ∧ (P → Q)</strong>."
};

var desafio_f2_8 = {
    fase: 2,
    frase: "O explorador entra ou o guardião acorda, mas não ambos.",
    legenda: { P: "o explorador entra", Q: "o guardião acorda" },
    alternativas: [
        "a) P ∨ Q",
        "b) P ∧ Q",
        "c) (P ∨ Q) ∧ ¬(P ∧ Q)",
        "d) ¬P ∨ ¬Q",
        "e) P ↔ Q"
    ],
    resposta: "c",
    explicacao: "\"P ou Q, mas não ambos\" é o <strong>ou exclusivo</strong>: <strong>(P ∨ Q) ∧ ¬(P ∧ Q)</strong>."
};

var desafiosFase1 = [
    desafio_1, desafio_2, desafio_3, desafio_4,
    desafio_5, desafio_6, desafio_7, desafio_8
];

var desafiosFase2 = [
    desafio_f2_1, desafio_f2_2, desafio_f2_3, desafio_f2_4,
    desafio_f2_5, desafio_f2_6, desafio_f2_7, desafio_f2_8
];