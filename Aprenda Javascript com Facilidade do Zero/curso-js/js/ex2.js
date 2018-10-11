console.log("Folha de Exercícios 02");

//Ex01
console.log('--------------------------------------------');
console.log('Ex01 - OK');
var num1 = document.getElementById("num_1").innerHTML;
var num2 = document.getElementById("num_2").innerHTML;
document.getElementById("resultado").innerHTML = '<strong>' + parseFloat(num1) + parseFloat(num2) + '</strong>';

console.log('--------------------------------------------');
console.log('Ex02 - OK');
var caixaAzul = document.getElementById("caixa_azul").innerHTML;

function calcFahrenheit(caixa_azul) {
    var calc = (9 * caixa_azul / 5) + 32;
    return calc;
}

document.getElementById("caixa_amarela").innerHTML = parseFloat(calcFahrenheit(caixaAzul));

console.log('--------------------------------------------');
console.log('Ex03 - OK');

var grupos = [
    ["João", "Maria"],
    ["Pedro", "Joana", "André", "Júlio"],
    ["Carolina", "Helena", "Marcelo"]
];

grupos.push(grupos[2].slice(-2));
grupos.push(["Mariana", "Felipe", "Carla"]);

console.log(grupos);

console.log('--------------------------------------------');
console.log('Ex04');

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4
}

console.log('A - OK');
document.getElementById('categoria_principal').innerHTML = curso.categoria[0];

console.log('B - OK');

function totalAvaliacoes(curso) {
    var calcTotalAvaliacoes = (curso.n_aval_1_estrela + curso.n_aval_2_estrelas + curso.n_aval_3_estrelas + curso.n_aval_4_estrelas + curso.n_aval_5_estrelas);
    return calcTotalAvaliacoes;
}
document.getElementById("total_aval").innerHTML = totalAvaliacoes(curso);

function mediaAvaliacoes() {
    var calcMediaAvaliacoes = ((1 * curso.n_aval_1_estrela) + (2 * curso.n_aval_2_estrelas) + (3 * curso.n_aval_3_estrelas) + (4 * curso.n_aval_4_estrelas) + (5 * curso.n_aval_5_estrelas)) / (curso.n_aval_1_estrela + curso.n_aval_2_estrelas + curso.n_aval_3_estrelas + curso.n_aval_4_estrelas + curso.n_aval_5_estrelas);
    return calcMediaAvaliacoes;
}
document.getElementById("media_aval").innerHTML = mediaAvaliacoes(curso).toFixed(2);

console.log('--------------------------------------------');
console.log('Ex05');

var cadastro = {
    'nome': 'Andre',
    'sobrenome': 'Leme',
    'email': 'andre@leme.com'
};

function criarTabela() {
    var tableHtml = '<div class="tableBox">'
        ; tableHtml += '<table>'
        ; tableHtml += '<tr>'
        ; tableHtml += '<th>Nome Completo</th>'
        ; tableHtml += '<th>Email</th>'
        ; tableHtml += '</tr>'
        ; tableHtml += '<tr>'
        ; tableHtml += '<td>' + cadastro.nome + ' ' + cadastro.sobrenome + '</td>'
        ; tableHtml += '<td>' + cadastro.email + '</td>'
        ; tableHtml += '</tr>'
        ; tableHtml += '</table>'
        ; tableHtml += '</div>';
        return tableHtml;
}

document.getElementById('tabela').innerHTML = criarTabela();