console.log("Folha de Exercícios N. 4");

console.log("--------------------------------------");
console.log("Ex 01");

document.getElementById("estados").onchange = function () {
    var ccbEstados = document.getElementById("estados");
    var selectEstado = ccbEstados.options.selectedIndex;
    var estadoSelecionado = ccbEstados.options[selectEstado].value;
    window.localStorage.setItem("estadoSelecionado", estadoSelecionado);
}

carregaEstadoSelecionadoLocalstorage();

function carregaEstadoSelecionadoLocalstorage() {
    if (localStorage['estadoSelecionado']) {
        document.getElementById('estados').value = localStorage['estadoSelecionado'];
    }
}

console.log("--------------------------------------");
console.log("Ex 02");

document.getElementById("confirmar_pedido").onclick = function () {
    var ccbPrazo = document.getElementById("envios");
    var selectPrazo = ccbPrazo.options.selectedIndex;
    var descPrazo = ccbPrazo.options[selectPrazo].value;
    var now = new Date();
    var dataAtual = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    document.getElementById("data_pedido").innerHTML = dataAtual;

    if (selectPrazo) {
        var calcPrazo;
        switch (descPrazo) {
            case "normal":
                calcPrazo = new Date(now.getTime() + (86400000 * 18));
                document.getElementById("data_entrega").innerHTML = addZeroLeft(calcPrazo.getDate()) + '/' + addZeroLeft((calcPrazo.getMonth() + 1)) + '/' + calcPrazo.getFullYear();
                break;

            case "express":
                calcPrazo = new Date(now.getTime() + (86400000 * 12));
                document.getElementById("data_entrega").innerHTML = addZeroLeft(calcPrazo.getDate()) + '/' + addZeroLeft((calcPrazo.getMonth() + 1)) + '/' + calcPrazo.getFullYear();
                break;
        }
    }
    else {
        document.getElementById("data_entrega").innerHTML = "Tipo de entrega não selecioando";
    }
}

function addZeroLeft(number) {
    if (number <= 9) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

console.log("--------------------------------------");
console.log("Ex 03");


var mil = 0;
var seg = 0;
var min = 0;
var hor = 0;
var start = false;

document.getElementById("comecar_parar").onclick = function () {
    if (!start) {
        start = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";

        initCronometro = window.setInterval(function () {
            mil++;
            if (mil >= 100) {
                seg++;
                mil = 0;
                if (seg >= 60) {
                    min++;
                    seg = 0;
                    if (min >= 60) {
                        hor++;
                        min = 0;
                    }
                }
            }
            document.getElementById("cronometro").innerHTML = addZeroLeft(hor) + ':' + addZeroLeft(min) + ':' + addZeroLeft(seg) + ' ' + addZeroLeft(mil);
        }, 10);
    } else {
        window.clearInterval(initCronometro)
        start = false;
        document.getElementById("comecar_parar").innerHTML = "Começar";
    }
}

document.getElementById("zerar").onclick = function () {
    window.clearInterval(initCronometro)
    start = false;
    document.getElementById("comecar_parar").innerHTML = "Começar";
    document.getElementById("cronometro").innerHTML = "00:00:00 00";
    zerarVariaveis()

}

function zerarVariaveis() {
    mil = 0;
    seg = 0;
    min = 0;
    hor = 0;
}


console.log("--------------------------------------");
console.log("Ex 04");

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '4',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '4',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];


function calcTotalArrecadado(categoria) {
    var preco = 0;

    switch (categoria) {
        case "1":
            preco = 11.20;
            break;

        case "2":
            preco = 22.45;
            break;

        case "3":
            preco = 16.88;
            break;

        case "4":
            preco = 33.65;
            break;
    }
    return preco;
}

var calc = 0;
for (var a = 0; a < carros.length; a++) {
    calc += parseFloat(calcTotalArrecadado(carros[a].categoria));
}

document.getElementById("faturamento_total").innerHTML = calc.toFixed(2);
