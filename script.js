function somando(){
    let num1 = numero[0]
    let num2 = numero[1];
    let soma = num1 + num2; 

    document.getElementById("resultados") = soma;
}

function subtraindo(){
    let num1 = numero[0];
    let num2 = numero[1];
    let sub = num1 - num2;
    document.getElementById("resultados") = sub;
}

function dividindo(){
    let num1 = numero[0];
    let num2 = numero[1];
    let div = num1/num2;
    document.getElementById("resultados") = div;
}

function multiplicando(){
    let num1 = numero[0];
    let num2 = numero[1];
    let multi = num1*num2;

    document.getElementById("resultados") = multi;
}

function fazendoContas(operacao){
    let numero = new Array(2)
    numero[0] = parseFloat (document.getElementById("numero1").value);
    numero[1] = parseFloat (document.getElementById("numero2").value);

    

    if (operacao==somando){
        somando();
    }
    if (operacao==subtraindo){
        subtraindo();
    }
    if (operacao==dividindo){
        dividindo();
    }
    if (operacao==multiplicando){
        multiplicando();
    }
}

