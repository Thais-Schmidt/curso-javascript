//o indice do array sempre começa no 0
//let acessa só naquele escopo
//var acessa em qualquer lugar do codigo
//const é uma constante 

// Exemplo 1

var notas = new Array(5);
notas[0] = 8.5;
notas[1] = 5.0; 
notas[2] = 10.0;
notas[3] = 9.0;
notas[4] = 4.5;


document.write("Notas: " +notas[0]+ ", " +notas[1]+ " e " +notas[2]+ ".<br><br>"); 

// Exemplo 2

var diaSemana = new Array(7);
diaSemana[0] = "Domingo";
diaSemana[1] = "Segunda-feira";
diaSemana[2] = "Terça-feira";
diaSemana[3] = "Quarta-feira";
diaSemana[4] = "Quinta-feira";
diaSemana[5] = "Sexta-feira";
diaSemana[6] = "Sabado";
nomeRepresentante = "Giovanna";
alunoDestaque = "Pantalhão";

document.write("Na semana, " +diaSemana[3]+ " e " +diaSemana[4]+ " são horriveis.<br><br>");
document.write("Hoje é " +diaSemana[2]+ ".<br><br>");
document.write("Teremos nesta " +diaSemana[4]+ ", o dia de comes e bebes. Patrocinado pelos alunos " +nomeRepresentante+ " e " +alunoDestaque+ ".<br><br>");

// Exemplo 3

diaSemana1 = new Array ("Domingo","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");
document.write("Nos dias " +diaSemana1[3]+ " e " +diaSemana1[4]+ " teremos o curso da Google.<br><br><br>");

//Exercicios para reforçar

var arrayA = new Array(5);
arrayA [0] = parseInt (prompt("Digite o primeiro numero"));
arrayA [1] = parseInt (prompt("Digite o segundo numero"));
arrayA [2] = parseInt (prompt("Digite o terceiro numero"));
arrayA [3] = parseInt (prompt("Digite o quarto numero"));
arrayA [4] = parseInt (prompt("Digite o quinto numero"));
//console.log(arrayA); //serve para identificar algum erro no codigo da variavel
document.write(arrayA[0]+"<br>");
document.write(arrayA[1]+"<br>");
document.write(arrayA[2]+"<br>");
document.write(arrayA[3]+"<br>");
document.write(arrayA[4]+"<br><br>");


var arrayB = new Array(5);
arrayB[0] = Math.pow(arrayA[0],2);//arrayA[0] * arrayA[0];
arrayB[1] = Math.pow(arrayA[1],2);//arrayA[1] * arrayA[1];
arrayB[2] = Math.pow(arrayA[2],2);//arrayA[2] * arrayA[2];
arrayB[3] = Math.pow(arrayA[3],2);//arrayA[3] * arrayA[3];
arrayB[4] = Math.pow(arrayA[4],2);//arrayA[4] * arrayA[4];
console.log(arrayB);

document.write(arrayB[0]+"<br>")
document.write(arrayB[1]+"<br>")
document.write(arrayB[2]+"<br>")
document.write(arrayB[3]+"<br>")
document.write(arrayB[4]+"<br><br>")

var arrayAa = new Array (5);
var arrayBb = new Array (5);
var arrayCc = new Array (10);
arrayAa[0] = parseInt (prompt("Digite o primeiro valor"));
arrayAa[1] = parseInt (prompt("Digite o segundo valor")); 
arrayAa[2] = parseInt (prompt("Digite o terceiro valor"));
arrayAa[3] = parseInt (prompt("Digite o quarto valor"));
arrayAa[4] = parseInt (prompt("Digite o quinto valor"));

arrayBb[0] = parseInt (prompt("Digite o primeiro  valor"));
arrayBb[1] = parseInt (prompt("Digite o segundo valor"));
arrayBb[2] = parseInt (prompt("Digite o terceiro valor"));
arrayBb[3] = parseInt (prompt("Digite o quarto valor"));
arrayBb[4] = parseInt (prompt("Digite o quinto valor"));

arrayCc[0] = arrayAa[0];
arrayCc[1] = arrayAa[1];
arrayCc[2] = arrayAa[2];
arrayCc[3] = arrayAa[3];
arrayCc[4] = arrayAa[4];
arrayCc[5] = arrayBb[0];
arrayCc[6] = arrayBb[1];
arrayCc[7] = arrayBb[2];
arrayCc[8] = arrayBb[3];
arrayCc[9] = arrayBb[4];

document.write(arrayCc[0] +"<br>")
document.write(arrayCc[1] +"<br>")
document.write(arrayCc[2] +"<br>")
document.write(arrayCc[3] +"<br>")
document.write(arrayCc[4] +"<br>")
document.write(arrayCc[5] +"<br>")
document.write(arrayCc[6] +"<br>")
document.write(arrayCc[7] +"<br>")
document.write(arrayCc[8] +"<br>")
document.write(arrayCc[9] +"<br>")


