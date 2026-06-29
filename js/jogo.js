
var faseGlobal    = 1;  
var indiceDesafio = 0;
var desafioAtual  = null;

var vidaMaxima = 3;
var vidaAtual  = vidaMaxima;

var bloqueadoAte    = null;
var intervaloTimeout = null;
function iniciarJogo() {

    if (bloqueadoAte && bloqueadoAte > Date.now()) {
        document.getElementById('telaInicial').style.display = 'none';
        document.getElementById('telaJogo').style.display    = 'block';
        ativarTelaTimeout();
        return;
    }

    vidaAtual = vidaMaxima;
    atualizarBarraVida();

    document.getElementById('telaInicial').style.display  = 'none';
    document.getElementById('telaJogo').style.display     = 'block';
    document.getElementById('jogoConteudo').style.display = 'block';
    document.getElementById('telaTimeout').style.display  = 'none';

    mostrarSimbolos();
}


function mostrarSimbolos() {

    document.getElementById('fase').innerHTML = "Fase 1: Regras de Inferência";

    document.getElementById('jogoConteudo').innerHTML = `
        <div class="pergunta" style="text-align:center;">
            <h2 style="font-family:'Pirata One',cursive;color:#f1d279;margin-bottom:20px;">Símbolos Lógicos</h2>
            <p style="font-size:1.1rem;margin:10px 0;">
                <strong style="color:#f1d279;font-size:1.3rem;">→</strong>
                &nbsp;&nbsp; Condicional &nbsp;
                <em style="color:#a4b3c6;">(Se P, então Q)</em>
            </p>
            <p style="font-size:1.1rem;margin:10px 0;">
                <strong style="color:#f1d279;font-size:1.3rem;">↔</strong>
                &nbsp;&nbsp; Bicondicional &nbsp;
                <em style="color:#a4b3c6;">(P se e somente se Q)</em>
            </p>
            <p style="font-size:1.1rem;margin:10px 0;">
                <strong style="color:#f4b0b0;font-size:1.3rem;">¬</strong>
                &nbsp;&nbsp; Negação &nbsp;
                <em style="color:#a4b3c6;">(Não P)</em>
            </p>
            <p style="font-size:1.1rem;margin:10px 0;">
                <strong style="color:#f1d279;font-size:1.3rem;">∧</strong>
                &nbsp;&nbsp; Conjunção &nbsp;
                <em style="color:#a4b3c6;">(P e Q)</em>
            </p>
            <p style="font-size:1.1rem;margin:10px 0;">
                <strong style="color:#f1d279;font-size:1.3rem;">∨</strong>
                &nbsp;&nbsp; Disjunção &nbsp;
                <em style="color:#a4b3c6;">(P ou Q)</em>
            </p>
        </div>
        <br>
        <div style="text-align:center;">
            <button class="btn-adventure" onclick="mostrarRegras()">Continuar</button>
        </div>
    `;
}

function regraHTML(nome, premissas, conclusao) {

    var linhasPremissas = premissas.map(function(l) {
        return '<span style="font-family:\'Georgia\',serif;font-size:1.4rem;color:#e2e8f0;letter-spacing:4px;font-style:italic;">' + l + '</span>';
    }).join('');

    return `
        <div style="margin-bottom:28px;">
            <h3 style="font-family:'Pirata One',cursive;font-size:1.3rem;color:#f1d279;text-align:center;margin:0 0 14px 0;letter-spacing:1px;">
                ${nome}
            </h3>
            <div style="display:flex;flex-direction:column;align-items:center;background:rgba(0,0,0,0.35);border:1px solid #4a5a70;border-radius:10px;padding:20px 44px;margin:0 auto;width:fit-content;">
                <div style="display:flex;flex-direction:column;align-items:flex-start;gap:5px;">
                    ${linhasPremissas}
                </div>
                <div style="width:100%;height:2px;background:#cfa745;margin:11px 0;border-radius:1px;"></div>
                <span style="font-family:'Georgia',serif;font-size:1.4rem;color:#e2e8f0;letter-spacing:4px;font-style:italic;align-self:flex-start;">
                    <span style="color:#cfa745;margin-right:6px;">∴</span>${conclusao}
                </span>
            </div>
        </div>
    `;
}

function mostrarRegras() {

    var F   = '<span style="color:#f1d279;">→</span>';
    var NEG = '<span style="color:#f4b0b0;">¬</span>';
    var AND = '<span style="color:#f1d279;">∧</span>';
    var OR  = '<span style="color:#f1d279;">∨</span>';

    var regras =
        regraHTML(
            'Modus Ponens (MP)',
            ['P ' + F + ' Q', 'P'],
            'Q',
            'Se "P implica Q" e P é verdadeiro, então Q também é verdadeiro.'
        ) +
        regraHTML(
            'Modus Tollens (MT)',
            ['P ' + F + ' Q', NEG + 'Q'],
            NEG + 'P',
        ) +
        regraHTML(
            'Silogismo Hipotético (SH)',
            ['P ' + F + ' Q', 'Q ' + F + ' R'],
            'P ' + F + ' R',
        ) +
        regraHTML(
            'Silogismo Disjuntivo (SD)',
            ['P ' + OR + ' Q', NEG + 'P'],
            'Q',
        ) +
        regraHTML(
            'Simplificação (S)',
            ['P ' + AND + ' Q'],
            'P',
        ) +
        regraHTML(
            'Adição (A)',
            ['P'],
            'P ' + OR + ' Q',
        );

    document.getElementById('jogoConteudo').innerHTML = `
        <p style="font-family:'Cinzel',serif;font-size:0.78rem;color:#a4b3c6;letter-spacing:3px;text-transform:uppercase;margin:0 0 4px 0;text-align:center;">
            Regras de Inferência
        </p>
        <h2 style="font-family:'Pirata One',cursive;font-size:1.5rem;color:#f1d279;margin:0 0 22px 0;text-align:center;">
            Aprenda antes de lutar, pirata!
        </h2>
        <div style="max-height:420px;overflow-y:auto;padding-right:6px;">
            ${regras}
        </div>
        <div style="text-align:center;margin-top:18px;">
            <button class="btn-adventure" onclick="iniciarFase(1)">Iniciar Desafio</button>
        </div>
    `;
}
function iniciarFase(fase) {

    faseGlobal    = fase;
    indiceDesafio = 0;

    if (fase === 2) {
        mostrarIntroFase2();
    } else {
        prepararAreaDesafio();
        carregarDesafio();
    }
}
function mostrarIntroFase2() {

    document.getElementById('fase').innerHTML = "Fase 2: Simbolização";

    document.getElementById('jogoConteudo').innerHTML = `
        <p style="font-family:'Cinzel',serif;font-size:0.78rem;color:#a4b3c6;letter-spacing:3px;text-transform:uppercase;margin:0 0 4px 0;text-align:center;">
            Nova Fase Desbloqueada
        </p>
        <h2 style="font-family:'Pirata One',cursive;font-size:1.5rem;color:#f1d279;margin:0 0 18px 0;text-align:center;">
            ⚔️ Simbolização Lógica
        </h2>
        <div style="background:rgba(0,0,0,0.3);border:1px solid #4a5a70;border-radius:10px;padding:20px 24px;margin:0 0 22px 0;">
            <p style="color:#e2e8f0;font-size:0.97rem;line-height:1.8;margin:0 0 10px 0;">
                Agora o desafio muda! Você receberá uma <strong style="color:#f1d279;">frase</strong>
                e deverá escolher a <strong style="color:#f1d279;">representação simbólica correta</strong>.
            </p>
        </div>
        <div style="text-align:center;">
            <button class="btn-adventure" onclick="prepararAreaDesafio(); carregarDesafio();">Começar Fase 2</button>
        </div>
    `;
}
function prepararAreaDesafio() {

    document.getElementById('jogoConteudo').innerHTML = `
        <div id="pergunta" class="pergunta"></div>
        <div id="alternativas"></div>
        <h3 id="resultado"></h3>
    `;
}

function carregarDesafio() {

    var lista = faseGlobal === 2 ? desafiosFase2 : desafiosFase1;
    desafioAtual = lista[indiceDesafio];

    var numFase = faseGlobal;
    document.getElementById('fase').innerHTML = "Fase " + numFase + " — Questão " + (indiceDesafio + 1) + "/" + lista.length;

    if (faseGlobal === 2) {
        renderizarDesafioFase2();
    } else {
        renderizarDesafioFase1();
    }
}

function renderizarDesafioFase1() {

    document.getElementById('pergunta').innerHTML = desafioAtual.pergunta;

    var area = document.getElementById('alternativas');
    area.innerHTML = '';

    desafioAtual.alternativas.forEach(function(alternativa, index) {
        var letra = ['a', 'b', 'c', 'd', 'e'][index];
        var btn   = document.createElement('button');
        btn.textContent = alternativa;
        btn.onclick = function() { verificarResposta(letra); };
        area.appendChild(btn);
    });
}

function renderizarDesafioFase2() {
    var legendaHTML = Object.keys(desafioAtual.legenda).map(function(letra) {
        return '<span style="color:#f1d279;font-weight:bold;">' + letra + '</span> = ' +
               '<em style="color:#a4b3c6;">' + desafioAtual.legenda[letra] + '</em>';
    }).join('&nbsp;&nbsp;|&nbsp;&nbsp;');

        document.getElementById('pergunta').innerHTML = `
            <p style="font-family:'Cinzel',serif;font-size:0.75rem;color:#a4b3c6;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px 0;">
                Simbolize a Frase:
            </p>
            <p style="font-size:1.05rem;color:#e2e8f0;line-height:1.7;margin:0 0 14px 0;font-style:italic;">
                "${desafioAtual.frase}"
            </p>
        `;

    var area = document.getElementById('alternativas');
    area.innerHTML = '';

    desafioAtual.alternativas.forEach(function(alternativa, index) {
        var letra = ['a', 'b', 'c', 'd', 'e'][index];
        var btn   = document.createElement('button');
        btn.innerHTML = alternativa;   
        btn.onclick   = function() { verificarResposta(letra); };
        area.appendChild(btn);
    });
}

function verificarResposta(respostaEscolhida) {

    var resultado = document.getElementById('resultado');

    if (respostaEscolhida === desafioAtual.resposta) {

        var extra = (faseGlobal === 2 && desafioAtual.explicacao)
            ? '<br><span style="font-size:0.85rem;color:#a4b3c6;">' + desafioAtual.explicacao + '</span>'
            : '';

        resultado.innerHTML = '✅ Correto! Próximo desafio liberado.' + extra;
        setTimeout(proximoDesafio, 2000);

    } else {

        resultado.innerHTML = "❌ Resposta incorreta. Você perdeu 1 de vida!";
        computarErro();
    }
}

function proximoDesafio() {

    var lista = faseGlobal === 2 ? desafiosFase2 : desafiosFase1;
    indiceDesafio++;

    if (indiceDesafio < lista.length) {

        document.getElementById('resultado').innerHTML = '';
        carregarDesafio();

    } else if (faseGlobal === 1) {

        mostrarIntroFase2();
        faseGlobal= 2;
        indiceDesafio= 0;

    } else {

        document.getElementById('fase').innerHTML= "Aventura concluída!";
        document.getElementById('pergunta').innerHTML= `
            <div style="text-align:center;padding:30px 0;">
                <div style="font-size:3rem;margin-bottom:12px;">🏆</div>
                <h2 style="font-family:'Pirata One',cursive;color:#f1d279;font-size:1.8rem;">
                    Parabéns, Pirata!
                </h2>
                <p style="color:#a4b3c6;font-size:1rem;line-height:1.8;">
                    Você concluiu todas as fases e encontrou todos os tesouros!
                </p>
            </div>
        `;
        document.getElementById('alternativas').innerHTML = '';
        document.getElementById('resultado').innerHTML    = '';
    }
}

function atualizarBarraVida() {

    var porcentagem = (vidaAtual / vidaMaxima) * 100;
    var barra  = document.getElementById('healthBar');
    var texto  = document.getElementById('healthText');

    if (barra && texto) {
        barra.style.width = porcentagem + "%";
        texto.innerText   = "Vida: " + vidaAtual + " / " + vidaMaxima;
    }
}
function computarErro() {

    vidaAtual--;
    atualizarBarraVida();

    if (vidaAtual <= 0) {
        bloqueadoAte = Date.now() + (2 * 60 * 1000);
        ativarTelaTimeout();
    }
}

function ativarTelaTimeout() {

    document.getElementById('jogoConteudo').style.display = 'none';
    document.getElementById('telaTimeout').style.display  = 'block';
    document.getElementById('fase').innerHTML= "Pirata Nocauteado";

    iniciarContador();
}

function iniciarContador() {
    
    if (intervaloTimeout) clearInterval(intervaloTimeout);
    intervaloTimeout = setInterval(function() {
        var tempoRestante = bloqueadoAte - Date.now();
        if (!bloqueadoAte || tempoRestante <= 0) {
            clearInterval(intervaloTimeout);
            bloqueadoAte = null;
            vidaAtual    = vidaMaxima;
            atualizarBarraVida();
            document.getElementById('jogoConteudo').style.display = 'block';
            document.getElementById('telaTimeout').style.display  = 'none';
            prepararAreaDesafio();
            carregarDesafio();
        } else {

            var minutos  = Math.floor(tempoRestante / 1000 / 60);
            var segundos = Math.floor((tempoRestante / 1000) % 60);
            var min = minutos  < 10 ? "0" + minutos  : minutos;
            var seg = segundos < 10 ? "0" + segundos : segundos;

            document.getElementById('contadorTempo').innerText = min + ":" + seg;
        }
    }, 1000);
}