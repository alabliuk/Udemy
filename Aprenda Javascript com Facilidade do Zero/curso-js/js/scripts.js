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
var num1 = 20;
var num2 = 3;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;

var media = (num1 + num2) / 2;
console.log('A media é: ' + media);
console.log(Math.pow(media, 4));

/* Parênteses podem ser usados para montar expressões. Neste caso eles são necessários para calcular a média de dois números, 
caso contrário a divisão num2 / 2 seria realizada antes da soma, devido à ordem das operações matemáticas. */  

var increment = 20;
increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
console.log(increment); // O console mostrará 25

// esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

increment = 1;
increment += 5;
console.log(increment); // O console mostrará 6

// podemos também usar *=, /= e -= para multiplicação, divisão e subtração

var ddd = 21;
var telefone = 998887655;

/* Se quisermos montar o telefone completo usando concatenação, podemos ter problemas já que as variáveis são do tipo número. 
Neste caso devemos convertê-las antes de montar o telefone. 
Para isso, usamos o método toString, que recebe entre parênteses a valor ou variável que queremos converter.*/

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

var telefone_completo = ddd_string + tel_string;

console.log(telefone_completo); // retorna '21998887655'

var idade = '17';
var idade_num = parseInt(idade);
idade_num++;

console.log(idade_num); // O console mostrará 18


//----------------------------------------------------------------
// AULA 6