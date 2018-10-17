console.log("Folha de Exercícios n 3");

console.log("---------------------------------------------------------------------------------");
console.log("Ex01");

function calcularCelsiusToFahrenheit() {
    var celsius = document.getElementById("temp_celsius").value;
    var calc = (9 * celsius / 5) + 32;
    return calc;
}

document.getElementById("converter").onclick = function () {
    document.getElementById("temp_fahr").innerHTML = calcularCelsiusToFahrenheit();
}

console.log("---------------------------------------------------------------------------------");
console.log("Ex02");

var inicioCopa = 1930
var finalCopa = 2018
var listCopa = document.getElementById("anos_copa");
listCopa.innerHTML = "";

for (var aux = 0; inicioCopa <= finalCopa; inicioCopa += 4) {
    listCopa.innerHTML += '<li>' + inicioCopa + '</li>';
}

console.log("---------------------------------------------------------------------------------");
console.log("Ex03");

document.getElementById("calcular").onclick = function () {
    document.getElementById("result").innerHTML = calcResultadoAluno();
}

function calcResultadoAluno() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var faltas = parseFloat(document.getElementById("n_faltas").value);
    var TotalAulas = 20;
    var resultadoAluno;

    var presenca = (faltas / TotalAulas) * 10; // OU presenca = (TotalAulas - fatas) / 20;
    var mediaAluno = (nota1 + nota2) / 2;

    if (presenca >= 7) {
        if (mediaAluno >= 6.5) {
            resultadoAluno = "Aluno Aprovado!";
        }
        else {
            resultadoAluno = "Aluno não atingiu a média";
        }
    }
    else if (mediaAluno < 6.5) {

        resultadoAluno = "Aluno não atingiu a média e o mínimo de presença";
    }
    else {
        resultadoAluno = "Aluno não atingiu mínimo de presença";
    }
    return resultadoAluno;
}


console.log("---------------------------------------------------------------------------------");
console.log("Ex04");

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null

    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'

    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null

    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null

    }
];

var total_vendas = 0;
document.getElementById("vendas_cursos").innerHTML = "";

for (var b = 0; b < vendas_cursos.length; b++) {

    if (vendas_cursos[b].reembolso == null) {
        total_vendas += vendas_cursos[b].valor;

        var linhaHTML = "";
        linhaHTML += '<tr>';
        linhaHTML += '<td>' + vendas_cursos[b].aluno + '</td>';
        linhaHTML += '<td>' + vendas_cursos[b].data + '</td>';
        linhaHTML += '<td>' + vendas_cursos[b].valor + '</td>';
        linhaHTML += '</tr>';

        document.getElementById("vendas_cursos").innerHTML += linhaHTML;
    }
}
document.getElementById("total_vendas").innerHTML = total_vendas;