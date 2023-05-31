let area = document.getElementById('area');
let botao = document.getElementById("botao");

nomeCadastro = [];

function entrar(){

    let encontrou = false;
    let nome = prompt("Digite o seu nome:"); 

    if (nome === '' || nome === null) {

        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";

    } else {

        for (let i = 0; i <= nomeCadastro.length ; i++) {

            if ((nomeCadastro[i] == nome)) {

                area.innerHTML = "Bem vindo " + nome + "!<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");

                cadastrar1.setAttribute("hidden", "true"); 
                // var cadastro = document.getElementById("cadastrar");
                // cadastro.removeAttribute("cadastro");

                encontrou = true;
                return;
            }
        }
    }

    if(encontrou == false){
        alert("Nome não cadastrado!");
    }

}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu.<br>Clique no botao para acessar ou cadastrar."
    botao.removeAttribute("hidden");

}

function cadastrar(){

    var novoNome = prompt("Digite seu nome para cadastrar:");
    
    if(novoNome==='' || novoNome===null){
        alert("Nome invalido, por favor clique em cadastrar para fazer novo cadastro.")
        return;
    }
    else{
        nomeCadastro.push(novoNome); //joga o novo nome cadastrado dentro da array
        alert("Nome cadastrado! Clique em acessar para entrar.");
    }

}



