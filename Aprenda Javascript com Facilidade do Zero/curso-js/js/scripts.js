// ATALHOS
// Comando para comentar linha no VS Code => CTRL + ;

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
// // AULA 12
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
// // AULA 13

var ingredientes = ["pao branco", "queijo", "presunto"];
ingredientes[0] = "pao integral"

console.log(ingredientes);

ingredientes[4] = "maionese"
console.log(ingredientes);

var alunos = [ "João" , "Maria", "José", "Andre", "Lucas", "Mario" ];
console.log(alunos.slice(2,4));
console.log(alunos.slice(0,-4));

