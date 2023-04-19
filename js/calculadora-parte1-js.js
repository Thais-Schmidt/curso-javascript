function somar(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1+numero2;
    alert("O resultado da soma é igual a  "+resultado);
}

function subtrair(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 - numero2;
    alert("O resultado da subtração dos dois numeros é "+resultado);
}

function multiplicar(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 * numero2;
    alert("O resultado da subtração dos dois numeros é "+resultado);
}

function dividir(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 / numero2;
    alert("O resultado da subtração dos dois numeros é "+resultado);
}