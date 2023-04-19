// teste = "Isto é um teste.";
// teste = new String("Isto é um teste");
// teste1 = "Isto é um teste. ";
// teste2 = "Somente um teste";
// teste3 = teste1+teste2
// teste3 += "!";
// alert(teste3);

// frase = "Este é o meu Brasil.";
// document.write(frase.length); //mostra quantos caracteres tem o texto, contando os espaços.
// alert(frase)

// frase1 = "Ouvindo, você esquece. Lendo, você aprende. Fazendo, você sabe."
// alert(frase1.toUpperCase()) //toUpperCase() deixa toda a frase em letras maiusculas
// alert(frase1.toLowerCase()) //toLowerCase() deixa toda a frase em letras minusculas

// frase3 = "Brasil, meu Brasil brasileiro.";
// ind = frase3.indexOf ("meu");
// document.write(ind);



// var a = prompt("Digite um numero:") //prompt é a caixa de texto dentro do alert
// if(a > 40){
//     alert("a é maior que 40")
// }

// else{ //else = se não
//     alert("a é menor que 40")
// }


// var x = 2;
// var y = 3;
// if ((x==2)&&(y==4)){
//     var z = x + y;
//     alert("O valor de z é igual a " +z);
// }

// else{
//     alert("Alguma informação deu como false!!") //deu falso pois: na na var, y é igual a 3, e no if, y é igual a 4
// }


var diaDaSemana = 0
switch(diaDaSemana){
    case 0 : document.write("Domingo");
        break;
    case 1 : document.write("Segunda-feira");
        break;
    case 2 : document.write("Terça-feira");
        break;
    case 3 : document.write("Quarta-feira");
        break;
    case 4 : document.write("Quinta-feira");
        break;
    case 5 : document.write("Sexta-feira");
        break;
    case 6 : document.write("Sabado");
        break;

    default: alert("Dia da semana invalido!")
}
