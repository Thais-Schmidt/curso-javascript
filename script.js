criandoInputsText("area1");
criandoInputsRadio("area2");
criandoParagrafos("area3");

function criandoInputsText(input){
    let linha1 = document.getElementById("area1");

    for (let i=0; i<20; i++){
        var btnInput = document.createElement("input");
        btnInput.setAttribute("type","text");
        btnInput.setAttribute("id", input[i]);
        linha1.appendChild(btnInput);
        
    }
}

function criandoInputsRadio(radio){
    let linha2 = document.getElementById("area2");

    for (let i=0; i<20; i++){
        var btnInputR = document.createElement("input");
        btnInputR.setAttribute("type", "radio");
        btnInputR.setAttribute("id", radio[i]);
        linha2.appendChild(btnInputR);
    }
    
}


function criandoParagrafos(paragrafo){
    let linha3 = document.getElementById("area3");

    for (let i=0; i<20; i++){
        var btnParagrafo = document.createElement("p");
        btnParagrafo.setAttribute("class", "texto");
        btnParagrafo.setAttribute("id", paragrafo[i]);
        linha3.appendChild(btnParagrafo);
    
    }
}































