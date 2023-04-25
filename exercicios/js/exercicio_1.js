alert("Bem vindo!");

function somando(){
    var numero = new Array(2);
    numero[0] = parseFloat (document.getElementById("numeroUm").value);
    numero[1] = parseFloat (document.getElementById("numeroDois").value);

    var soma = numero[0] + numero[1]; 

    document.getElementById("resultados").value = soma;
}

function subtraindo(){
    var numero = new Array(2);
    numero[0] = parseFloat (document.getElementById("numeroUm").value);
    numero[1] = parseFloat (document.getElementById("numeroDois").value);
    var sub = numero[0] - numero[1];

    document.getElementById("resultados").value = sub;
}

function dividindo(){
    var numero = new Array(2);
    numero[0] = parseFloat (document.getElementById("numeroUm").value);
    numero[1] = parseFloat (document.getElementById("numeroDois").value);

    var div = numero[0] / numero[1];

    document.getElementById("resultados").value = div;
}

function multiplicando(){
    var numero = new Array(2);
    numero[0] = parseFloat (document.getElementById("numeroUm").value);
    numero[1] = parseFloat (document.getElementById("numeroDois").value);

    var multi = numero[0] * numero[1];

    document.getElementById("resultados").value = multi;
}







