//  var i = 0
//  document.write(i+"<br>");
//  i = 1;
//  document.write(i+"<br>");
//  i = 2;
//  document.write(i+"<br>");
//  i = 3;
//  document.write(i+"<br>");
//  i = 4;
//  document.write(i+"<br>");
//  i = 5;
//  document.write(i+"<br>");
//  i = 6;
//  document.write(i+"<br>");
//  i = 7;
//  document.write(i+"<br>");
//  i = 8
//  document.write(i+"<br>");
//  i = 9;
//  document.write(i+"<br><br>");




// for (let i = 0; i <= 9; i++) {
//     console.log(i) //aparece no console
//     document.write("Este numero e igual a "+i+"<br>") //aparece na pagina
// }




// Elaborar um programa que apresente o somatório dos valores pares existentes na faixa de 1 até 500.

// for (let i=15; i <=200; i++){

//     document.write("Este e o quadrado de "+i+" = "+i*i+"<br>")
// }




// Elaborar um programa que apresente os quadrados dos números inteiros existentes na faixa de valores de
// 15 a 200.

let soma = 0;
for(i=0; i<=500; i++){ //inicio do form

    let verifica = i%2;
    
    if(verifica==0){ //inicio do if
        soma= soma+i;
    } //fim do if
    
} //fim do form

document.write("O resultado dos numeros pares e igual a "+soma);
