function somar(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1+numero2;
    // alert("O resultado da soma é igual a  "+resultado);
    document.getElementById("result").value = resultado
}

function subtrair(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 - numero2;
    //alert("O resultado da subtração dos dois numeros é "+resultado);
    document.getElementById("result").value = resultado
}

function multiplicar(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 * numero2;
    //alert("O resultado da multiplicação dos dois numeros é "+resultado);
    document.getElementById("result").value = resultado
}

function dividir(){
    let numero1 = parseInt (document.getElementById("num1").value);
    let numero2 = parseInt (document.getElementById("num2").value);
    let resultado = numero1 / numero2;
    //alert("O resultado da divsão dos dois numeros é "+resultado);
    document.getElementById("result").value = resultado
}

function calcular(calculando){
    
    if(calculando=="somar"){
        somar();
    }

    if(calculando=="subtrair"){
        subtrair();
    }

    if(calculando=="multiplicar"){
        multiplicar();
    }

    if(calculando=="dividir"){  //pode ser desse jeito tambem, pois -dividir()- é a função criada anteriormente
        dividir();
    }
    
}

