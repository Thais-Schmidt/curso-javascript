

function calculoAdicao(){
    var numero = new Array(2);
    numero[0] = parseFloat (document.getElementById("numero1")); 
    numero[1] = parseFloat (document.getElementById("numero2"));

    document.getElementById("um").value= numero[0];
    document.getElementById("dois").value= numero[1];

    let numero1 = numero[0];
    let numero2 = numero[1];
    let soma = numero1+numero2
    
    document.getElementById("respostaAdicao") = soma;

}
    