//Ex01
console.log('Exercicio 01 - OK');

//Ex02
console.log('==================================================');
var nome = "Andre";
var anoNasc = 1992;
var anoAtual = 2018
console.log("Olá, eu me chamo " + nome + ", tenho " + (anoAtual - anoNasc) + " anos e estou estudando Javascript")

//Ex03
console.log('==================================================');
var nome = "Andre";
var matricula = "123";
var prova1 = 10;
var prova2 = 8;
console.log("O aluno " + nome + ", matrícula " + matricula + ", obteve a média final " + ((prova1 + prova2) / 2));

//Ex04
console.log('==================================================');
var cel1 = "114141225";
var cel2 = "4774918";
var result1 = false
var result2 = false

if(cel1.length == 9){ 
    result1 = true
}
console.log("Resultado do teste: " + result1)

if(cel2.length == 9){ 
    result2 = true
}
console.log("Resultado do teste: " + result2)

//Ex05
console.log('==================================================');
console.log(Math.pow(32, 6));

//Ex06
/*
a) var NOME;  ==  OK
b) var $num1;; ==  OK
c) var typeof;  ==  INVALIDO
d) var nome-aluno;  ==  INVALIDO
e) var tentativa_2;  ==  OK
f) var 2a_tentativa; ==  INVALIDO
g) var nome completo; ==  INVALIDO
*/

//Ex07
console.log('==================================================');
var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade);
console.log( (7+5) / numero + 2 ); 
console.log(pressao);
console.log(temperatura);
console.log(typeof pressao);
console.log(typeof temperatura);

//Ex08
console.log('==================================================');
var idade = 65;

console.log(idade != 65);//false
console.log(idade >= 65); //true
console.log("65" == idade);//true
console.log(65 !== idade);//false
console.log(typeof (idade > 60));
console.log(typeof (idade > 70));