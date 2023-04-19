function dividir(){

    let primeiraNota = parseFloat (document.getElementById("nota1").value);
    let segundaNota = parseFloat (document.getElementById("nota2").value);
    let soma = (primeiraNota+segundaNota)/2;
    document.getElementById("result").value = soma;
}

function calcular(calculando){

    if(calculando=="dividir"){
        dividir();

        var nome = document.getElementById("nomeAluno");
        var notaFinal = document.getElementById("result");
            if ((notaFinal==5)||(notaFinal==6)){
                alert("A media do aluno " +nome+ " foi " +notaFinal+ ". Sua situação é: recuperação.");
            }
            if ((notaFinal>=7)){
                alert("A media do aluno " +nome+ " foi " +notaFinal+ ". Sua situação é: aprovado.");
            }
            if((notaFinal<=4)){
                alert("A media do aluno " +nome+ " foi " +notaFinal+ ". Sua situação é: reprovado.");
            }
    }
    
}


