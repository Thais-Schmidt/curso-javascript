// criandoInputsText(); //colocando as funçoes aqui, eu faço com que elas apareçam no HTML
// criandoInputsRadio();
// criandoParagrafos();

function criandoInputsText() {

    let linha1 = document.getElementById("area1"); // usando esse let eu coloco essa funçao la dentro da area 

    for (let i = 1; i <= 20; i++) {

        var btnInput = document.createElement("input");
        var br = document.createElement("br"); //criei o elemento br para pular as linhas e o html nao ficar "feio"
        btnInput.setAttribute("type", "text");
        btnInput.setAttribute("id", i);
        // linha1.appendChild(br);
        linha1.appendChild(btnInput);

    }
}

function criandoInputsRadio() {

    let linha2 = document.getElementById("area2");

    for (let i = 31; i <= 50; i++) {

        var btnInputR = document.createElement("input");
        var br = document.createElement("br");
        btnInputR.setAttribute("type", "radio");
        btnInputR.setAttribute("id", i);
        linha2.appendChild(br);
        linha2.appendChild(btnInputR);

    }
}

function criandoParagrafos() {

    let linha3 = document.getElementById("area3");

    for (let i = 101; i <= 130; i++) {

        var l = "Paragrafo" + i;
        var btnParagrafo = document.createElement("p");
        var br = document.createElement("br");
        btnParagrafo.setAttribute("class", "texto");
        btnParagrafo.setAttribute("id", i); // para colocar um id diferente do outro, utilizei o i do looping, para facilitar 
        btnParagrafo.textContent = l; //textContent adicionou o texto dentro do paragrafo
        linha3.appendChild(br);
        linha3.appendChild(btnParagrafo);

    }
}

function verificaElemento() {

    if (document.getElementById('texto').checked) {
        // document.write("Voce escolheu a funçao Imput"); nao estava funcionando com os document.write
        // criandoInputsText();
        var local = document.getElementById("area1");
        var qtde = prompt("Quantos Imputs Texto?");

        if (qtde) {
            for (let i=1; i<=qtde; i++){
                var btnImputs = document.createElement("input");
                var br = document.createElement("br");
                local.appendChild(btnImputs);
                local.appendChild(br);
            }
        }
        
    }

    if(document.getElementById('radio').checked){
        var local2 = document.getElementById("area2");
        var qtde2 = prompt("Quantos Imputs Radio?");

        if(qtde2){
            for (let i=1; i<=qtde2; i++){
                var btnImputR = document.createElement("input");
                var br = document.createElement("br");
                btnImputR.setAttribute("type", "radio");
                local2.appendChild(btnImputR);
                local2.appendChild(br)
            }
        }

    }

    if(document.getElementById('paragrafo').checked){
        var local3 = document.getElementById("area3");
        var qtde3 = prompt("Quantos Paragrafos?");

        if(qtde3){
            for (let i=1; i<=qtde3; i++){
                var l = "Paragrafo " + i;
                var btnParagrafo = document.createElement("p");
                var br = document.createElement("br"); 
                btnParagrafo.textContent = l; //textContent adicionou o texto dentro do paragrafo
                local3.appendChild(br);
                local3.appendChild(btnParagrafo);
            }
        }
    }


}


























