// ATALHOS
// Comando para comentar linha no VS Code => CTRL + ;

// Executa os scripts apos a pagina ser totalmente carregada
$(function () {

    //----------------------------------------------------------------
    // AULA 02
    // alert("Mensagem enviada pelo Alert");
    // console.log("Mensagem enviada pelo console.log");

    //----------------------------------------------------------------
    // AULA 3
    // var latitude = 40.87663;
    // var longitude = -8.08373;
    // console.log(latitude);
    // console.log(longitude);

    //----------------------------------------------------------------
    // AULA 4
    // var nome = "João";  // podem ser usadas aspas duplas
    // var sobrenome = 'Gomes';  // ou aspas simples
    // var cpf = '111.111.111-11';
    // var telefone = "998887655";
    // var ddd = '21';
    // var email = 'joao@gmail.com';
    // var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como..."; ''
    // console.log('Nome completo: ' + nome + ' ' + sobrenome);
    // console.log('(' + ddd + ')' + telefone);
    // console.log('Primeira letra do nome: ' + nome[0]);
    // console.log('Última letra do nome: ' + nome[3]);
    // console.log('Número de caracteres do telefone: ' + telefone.length);

    //----------------------------------------------------------------
    //AULA 5
    // var num1 = 20;
    // var num2 = 3;
    // var soma = num1 + num2;
    // var subtracao = num1 - num2;
    // var divisao = num1 / num2;
    // var multiplicacao = num1 * num2;
    // var media = (num1 + num2) / 2;

    // console.log('A media é: ' + media);
    // console.log(Math.pow(media, 4));

    /* Parênteses podem ser usados para montar expressões. Neste caso eles são necessários para calcular a média de dois números, 
    caso contrário a divisão num2 / 2 seria realizada antes da soma, devido à ordem das operações matemáticas. */

    // var increment = 20;
    // increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
    // console.log(increment); // O console mostrará 25

    // // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

    // increment = 1;
    // increment += 5;
    // console.log(increment); // O console mostrará 6

    // // podemos também usar *=, /= e -= para multiplicação, divisão e subtração

    // var ddd = 21;
    // var telefone = 998887655;

    // /* Se quisermos montar o telefone completo usando concatenação, podemos ter problemas já que as variáveis são do tipo número. 
    // Neste caso devemos convertê-las antes de montar o telefone. 
    // Para isso, usamos o método toString, que recebe entre parênteses a valor ou variável que queremos converter.*/

    // var ddd_string = ddd.toString();
    // var tel_string = telefone.toString();
    // var telefone_completo = ddd_string + tel_string;
    // console.log(telefone_completo); // retorna '21998887655'

    // var idade = '17';
    // var idade_num = parseInt(idade);
    // idade_num++;

    // console.log(idade_num); // O console mostrará 18


    // //----------------------------------------------------------------
    // // AULA 6

    // var v_string = "teste";
    // var v_numero = 4.55;
    // var idade = 21;
    // var v_boolean = idade > 18 ;
    // console.log(typeof v_string);  // retorna string
    // console.log(typeof v_numero);  // retorna number
    // console.log(typeof v_boolean);  // retorna boolean


    // //----------------------------------------------------------------
    // // AULA 7
    // var undf = undefined;
    // var nl = null;
    // console.log(nl === undf);  // O console mostrará false
    // console.log(typeof undf);  // O console mostrará undefined
    // console.log(typeof nl);  // O console mostrará object


    // // //----------------------------------------------------------------
    // // // AULA 10
    // //Pegando conteudo da caixa azul
    // var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;
    // console.log(conteudo_caixa);

    // //Atribuindo conteudo da caixa azul na caixa amarela
    // document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

    // document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'caixa amarela' + '</h1>';
    // document.getElementById("caixa_azul").innerHTML = '<h1>' + document.getElementById("caixa_azul").innerHTML + '</h1>';


    // //----------------------------------------------------------------
    // // AULA 11
    // function soma_numeros() {
    //     var x = 5;
    //     var y = 2;
    //     var soma = x + y;
    //     console.log(soma);
    // }

    // soma_numeros();

    // function soma_args(num1, num2) {
    //     var soma = num1 + num2;
    //     return soma;
    // }

    // console.log("Resultado da soma: " + soma_args(10, 20));

    // var soma = soma_args(10, 20);

    // console.log("--------------------------------------------------------");
    // console.log("---------DESAFIO IMC------------------------------------");
    // console.log("--------------------------------------------------------");

    // function valor_imc(peso,altura) {
    //     var imc = peso / (altura * altura);
    //     return imc;
    // }

    // var meu_peso = document.getElementById("peso").innerHTML;
    // var minha_altura = document.getElementById("altura").innerHTML;
    // var meu_imc = valor_imc(meu_peso,minha_altura);
    // document.getElementById("imc").innerHTML = meu_imc.toFixed(2);

    // //Definir a quantidade de casas decimais a serem exibidas
    // //.toFixed(Casas)

    // //Converter para float
    // //parseFloat()


    // //----------------------------------------------------------------
    // // AULA 12

    // var ingredientes = ["pao branco", "queijo", "presunto"];
    // ingredientes[0] = "pao integral"

    // console.log(ingredientes);

    // ingredientes[4] = "maionese"
    // console.log(ingredientes);

    // var alunos = [ "João" , "Maria", "José", "Andre", "Lucas", "Mario" ];
    // console.log(alunos.slice(2,4));
    // console.log(alunos.slice(0,-4));

    // // //----------------------------------------------------------------
    // // // AULA 13

    // var funcionario = {
    //     'nome': 'Pedro Souza Gomes',
    //     'ano_nasc': 1972,
    //     'cpf': '111.111.111.11',
    //     'cargo': 'Analista de Sistemas'
    // };

    // console.log(funcionario['nome']);
    // console.log(funcionario.ano_nasc);

    // funcionario.cargo = 'Gerente de TI';
    // funcionario.cnh = '00123132994';

    // console.log(funcionario);

    // var cursos = [
    //     {
    //         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
    //         'avaliacoes': 680,
    //         'alunos': 2300,
    //         'categorias': ['programacao', 'tecnologia']
    //     },

    //     {
    //         'titulo': 'Aprenda PHP e faça sites dinâmicos',
    //         'avaliacoes': 180,
    //         'alunos': 350,
    //         'categorias': ['desenvolvimento web', 'programacao']
    //     },

    //     {
    //         'titulo': 'Excel do Zero ao Avançado',
    //         'avaliacoes': 420,
    //         'alunos': 1800,
    //         'categorias': ['produtividade', 'gestão']
    //     }
    // ];

    // console.log(cursos[1].categorias[0]);

    // cursos[2].categorias[1] = 'administração de empresas'

    // console.log(cursos[2].categorias[1]);
    // console.log(cursos);


    // // //----------------------------------------------------------------
    // // // AULA 14

    // var aluno = {
    //     'nome': 'Maria',
    //     'sobrenome': 'Pereira',
    //     'ano_nasc': 1992,
    //     'idade': function () {
    //         var calcIdade = 2018 - this.ano_nasc;
    //         return calcIdade;
    //     },
    //     'nome_completo': function () {
    //         var nomeCompleto = this.nome + ' ' + this.sobrenome;
    //         return nomeCompleto;
    //     }
    // }
    // console.log(aluno.nome_completo());
    // console.log(aluno.idade());


    // ----------------------------------------------------------------
    // AULA 16

    // document.getElementById("click-me").onclick = function () {
    //     alert("Voce clicou no botão");
    // }

    // document.getElementById("hover-me").onmouseover = function () {
    //     alert("Voce passou com o cursor no botão");
    // }

    // document.getElementById("leave-me").onmouseout = function () {
    //     alert("Voce saiu com o cursor no botão");
    // }

    // document.onkeydown = function() {
    //     alert('Voce apertou a tecla: ' + event.keyCode);
    // };

    // function button_clicked() {
    //     alert("Voce clicou no botao");
    // }

    // ----------------------------------------------------------------
    // AULA 17

    // EXEMPLOS DE MANIPULAÇÃO DE CSS
    // document.getElementById('botao_cor').onclick = function () {
    //     document.getElementById('botao_cor').style["background-color"] = "purple";
    //     document.getElementById('botao_cor').style.transform = "translateX(100px)";
    // };
    // OUUUU
    // document.getElementById('botao_cor').onclick = function () {
    //     this.style["background-color"] = "purple";
    //     this.style.transform = "translateX(100px)";
    // };
    // OUUU
    // var botao = document.getElementById('botao_cor');
    // botao.onclick = function () {
    //     this.style["background-color"] = "purple";
    //     this.style.transform = "translateX(100px)";
    // };

    // // ----------------------------------------------------------------
    // // AULA 18

    // var paragrafos = document.getElementsByTagName("p");
    // console.log(paragrafos);

    // // ----------------------------------------------------------------
    // // AULA 19

    // for (var a = 0; a < 10; a++) {
    //     console.log(a);
    // }

    // var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
    // for (var a = 0; a < alunos.length; a++) {
    //     console.log(alunos[a]);
    // }

    // var carro = {
    //     'Ano': 2018,
    //     'Modelo': 'Fox',
    //     'Cilindradas': '1.8',
    //     'Combustível': 'Gasolina'
    // }

    // for (var prop in carro) {
    //     console.log(prop + ': ' + carro[prop]);
    // }

    // var elementos = document.getElementsByClassName("exemplo");
    // for (var c = 0; c < elementos.length; c++) {
    //     elementos[c].style.color = "orange";
    //     elementos[c].style["font-weight"] = "bold";
    // }

    // var elementos = document.getElementsByTagName("p");
    // for (var c = 0; c < elementos.length; c++) {
    //     elementos[c].style.color = "orange";
    //     elementos[c].style["font-weight"] = "bold";
    // }

    // // ----------------------------------------------------------------
    // // AULA 20

    // var elementos = document.getElementsByTagName("p");
    // var c = 0;
    // while (c <= elementos.length) {
    //     elementos[c].style.color = "orange";
    //     elementos[c].style["font-weight"] = "bold";
    //     c++
    // }

    // var x = 1;
    // while (x <= 10) {
    //     console.log(x);
    //     x++;
    // }

    // var y = 7;
    // do {
    //     console.log(y);
    //     y++;
    // } while (y <= 10);


    // // ----------------------------------------------------------------
    // // AULA 21

    // // ----------------------------------------------------------------
    // // AULA 22

    // var funcionarios = [

    //     {
    //         'nome': 'Carlos Henrique da Silva',
    //         'idade': 45,
    //         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
    //     },
    //     {
    //         'nome': 'Maria Helena Pereira',
    //         'idade': 32,
    //         'filhos': ['João Pedro Pereira de Souza']
    //     },
    //     {
    //         'nome': 'José Feliciano Maia',
    //         'idade': 39,
    //         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
    //     }

    // ];

    // var list_element = document.getElementById("filhos");

    // for (var a = 0; a < funcionarios.length; a++) {
    //     if (funcionarios[a].filhos) {

    //         var lista_filhos = funcionarios[a].filhos;

    //         for (var b = 0; b < lista_filhos.length; b++) {
    //             list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
    //         }
    //     }
    // }


    // // // ----------------------------------------------------------------
    // // // AULA 24

    // window.onmousemove = function (e) {
    //     console.log("Eixo Y: " + e.pageY);
    //     console.log("Eixo X: " + e.pageX);
    // }


    // // // ----------------------------------------------------------------
    // // // AULA 25

    // // window.localStorage.setItem("nome", "Andre");
    // // console.log(localStorage['nome']);

    // document.getElementById("enviar-nome").onclick = function () {
    //     // guardar o nome digitado em local storage
    //     var nome = document.getElementById("nome-usuario").value;
    //     localStorage.setItem("nome", nome);

    //     // esconder formulario
    //     document.getElementById("name-field").style.display = "none";

    //     // atualizar e mostrar mensagem de boas vindas
    //     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    //     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    //     document.getElementById("welcome-area").style.display = "initial";
    // }

    // if (localStorage.nome) {
    //     // esconder formulario
    //     document.getElementById("name-field").style.display = "none";

    //     // atualizar e mostrar mensagem de boas vindas
    //     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    //     document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?";
    //     document.getElementById("welcome-area").style.display = "initial";
    // }

    // document.getElementById("not-me").onclick = function () {
    //     // remover chave nome do localstorage
    //     localStorage.removeItem("nome");

    //     //esconder mensagem de boas vindas
    //     document.getElementById("welcome-area").style.display = "none";

    //     // mostar formulario
    //     document.getElementById("name-field").style.display = "initial";
    // }


    // // // ----------------------------------------------------------------
    // // // AULA 26

    // // var data_hoje = new Date()
    // // console.log(data_hoje);

    // // Desafio: Cálculo de intervalo de datas

    // var envio = new Date('2018-3-20');
    // var entrega = new Date('2018-4-06');

    // var calc = (entrega - envio)/86400000;

    // document.getElementById('dias_entrega').innerHTML = calc ;


    // // ----------------------------------------------------------------
    // // AULA 27

    // document.getElementById("mostrar-loader").onclick = function() {
    //     document.getElementById("spinner-loader").style.display = "initial";
    //     setTimeout(() => {
    //         document.getElementById("spinner-loader").style.display = "none";
    //     }, 5000);
    // };

    //Desafio: Relógio

    // window.setInterval(function () {
    //     now = new Date;

    //     function format_time(time) {
    //         if (time >= 0 && time <= 9) {
    //             var formatted_time = time.toString();
    //             formatted_time = "0" + formatted_time;
    //         } else {
    //             var formatted_time = time.toString();
    //         }
    //         return formatted_time;
    //     }

    //     document.getElementById("relogio").innerHTML = format_time(now.getHours()) + ':' + format_time(now.getMinutes()) + ':' + format_time(now.getSeconds());
    // }, 1000);

    // // // ----------------------------------------------------------------
    // // // AULA 30

    // // combobox
    // document.getElementById("mostrar_opcao").onclick = function () {

    //     var campo_select = document.getElementById("options");
    //     var indice_selecionado = campo_select.options.selectedIndex;
    //     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    //     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
    // }

    // // radio 
    // document.getElementById("mostrar_radio").onclick = function () {

    //     var radio = document.getElementsByName("genero");
    //     var radio_selected;

    //     for (var a = 0; a < radio.length; a++) {
    //         if (radio[a].checked) {
    //             radio_selected = radio[a].value;
    //             break;
    //         }
    //     }
    //     document.getElementById("radio_selecionado").innerHTML = radio_selected;
    // };


    // // checkBoxes
    // document.getElementById("mostrar_check").onclick = function () {
    //     var check = document.getElementsByName("interesse");
    //     document.getElementById("check_selecionado").innerHTML = "";

    //     for (var b = 0; b < check.length; b++) {
    //         if (check[b].checked) {
    //             document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
    //         }
    //     }
    // };


    // // data
    // document.getElementById("mostrar_data").onclick = function () {
    //     var data_select = document.getElementById("data_evento").value;
    //     var data_completa = new Date(data_select);
    //     document.getElementById("data_selecionada").innerHTML = data_completa;
    // };


    // // ----------------------------------------------------------------
    // // AULA 31

    // document.getElementById("escolaridade").onchange = function () {

    //     var campo_select = document.getElementById("escolaridade");
    //     var indice_selecionado = campo_select.options.selectedIndex;
    //     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    //     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

    // };


    // var check = document.getElementsByName("lanche");

    // for (var a = 0; a < check.length; a++) {
    //     check[a].onchange = function () {
    //         document.getElementById("check_selecionado").innerHTML = "";
    //         for (var b = 0; b < check.length; b++) {
    //             if (check[b].checked) {
    //                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
    //             }
    //         }
    //     }
    // }


    // // // ----------------------------------------------------------------
    // // // AULA 34

    // $("#esconder").click(function () {
    //     $(".exemplo").hide();
    // });


    // // ----------------------------------------------------------------
    // // AULA 36

    // var lista = $("#interesses li");
    // $.each(lista, function (chave, valor) {
    //     console.log($(valor).text());
    // });

    // // ----------------------------------------------------------------
    // // // AULA 38

    // $("#nome").keyup(function () {

    //     var conteudoNome = $("#nome").val();
    //     if (conteudoNome) {
    //         $("#confirmar").css("display", "");
    //     }
    //     else {
    //         $("#confirmar").css("display", "none");
    //     }
    // });

    // ----------------------------------------------------------------
    // // AULA 42

    // $("#animar").click(function () {
    //     $("#quadrado").animate({
    //         width: '+=20px',
    //         height: '+=20px'
    //     }, 2000);
    // });

    // $("#animar").click(function () {

    //     $("#quadrado").animate({
    //         width: '+=100px'
    //     }, 500);

    //     $("#quadrado").animate({
    //         height: '+=100px'
    //     }), 500;

    // });



    // chave do metodo ready
});