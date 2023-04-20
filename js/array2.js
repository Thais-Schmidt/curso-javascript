function area(){
    document.getElementById("area");
}

var area = document.getElementById("area");

function outroNome(){
    var nome = prompt("Digite seu nome ");
        if(nome =="" || nome == null ){
            alert("Por favor preencher os campos ");
            area.innerHTML = ("Clique no botão para acessar...") 
        }else{
            area.innerHTML = ("Bem vindo! " +nome);
    }
}

function mostrarNumeros(){
    var arrayG = new Array(5);
    arrayG[0] = parseInt (document.getElementById("1").value);
    arrayG[1] = parseInt (document.getElementById("2").value);
    arrayG[2] = parseInt (document.getElementById("3").value);
    arrayG[3] = parseInt (document.getElementById("4").value);
    arrayG[4] = parseInt (document.getElementById("oi").value);

    var arrayH = new Array(6);
    arrayH[0] = parseInt (document.getElementById("6").value);
    arrayH[1] = parseInt (document.getElementById("7").value);
    arrayH[2] = parseInt (document.getElementById("8").value);
    arrayH[3] = parseInt (document.getElementById("9").value);
    arrayH[4] = parseInt (document.getElementById("10").value);
    arrayH[5] = parseInt (document.getElementById("11").value);

    console.log(arrayG[4])
    var arrayI = new Array(11);
    arrayI[0] = arrayG[0];
    arrayI[1] = arrayG[1];
    arrayI[2] = arrayG[2];
    arrayI[3] = arrayG[3];
    arrayI[4] = arrayG[4];
    arrayI[5] = arrayH[0];
    arrayI[6] = arrayH[1];
    arrayI[7] = arrayH[2];
    arrayI[8] = arrayH[3];
    arrayI[9] = arrayH[4];
    arrayI[10] = arrayH[5];

    document.getElementById("resultado1").value = arrayI[0];
    document.getElementById("resultado2").value = arrayI[1];
    document.getElementById("resultado3").value = arrayI[2];
    document.getElementById("resultado4").value = arrayI[3];
    document.getElementById("resultado5").value = arrayI[4];
    //document.getElementById("resultado5").value = arrayI[4];
    document.getElementById("resultado6").value = arrayI[5];
    document.getElementById("resultado7").value = arrayI[6];
    document.getElementById("resultado8").value = arrayI[7];
    document.getElementById("resultado9").value = arrayI[8];
    document.getElementById("resultado10").value = arrayI[9];
    document.getElementById("resultado11").value = arrayI[10];
}