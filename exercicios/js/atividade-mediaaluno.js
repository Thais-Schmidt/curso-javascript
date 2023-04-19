function dividir(){
    let nome = document.getElementById("nomeAluno").value;
    let primeiraNota = parseFloat (document.getElementById("nota1").value);
    let segundaNota = parseFloat (document.getElementById("nota2").value);
    let soma = (primeiraNota+segundaNota)/2;
    let nomeAluno = nome
    document.getElementById("result").value = soma;

    if((soma==5)||(soma==6)){
        alert("A media do aluno " +nome+ " foi " +soma+ ". Sua situação é: recuperação.")
    }
    if((soma>=7)){
        alert("A media do aluno " +nome+ " foi " +soma+ ". Sua situação é: aprovado.")
    }
    if((soma<=4)){
        alert("A media do aluno " +nome+ " foi " +soma+ ". Sua situação é: reprovado.")
    }
    
}

function calcular(calculando){

    if(calculando=="dividir"){
        dividir();
    }
}


//innerHeight.html = aparece o texto dentro do body
