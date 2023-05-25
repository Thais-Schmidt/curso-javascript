var area=document.getElementById('area');

function entrar(){
    var nome = prompt("Digite seu nome");

    if(nome ==='' || nome === null){
        alert("Ops, algo deu errado!");
        area.innerHTML = "Clique no botao para acessar.<br>";
    }
    else{
        area.innerHTML = "Bem vinda! " + nome + ".<br>";
    }

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
}

function sair(){
    alert("Ate mais!");
    area.innerHTML = "Voce saiu."
}