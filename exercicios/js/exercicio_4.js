//alert("Bem vindo!!");

function resultados(){

    var numeros = new Array(19);
    numeros[0] = parseFloat (document.getElementById("1").value);
    numeros[1] = parseFloat (document.getElementById("2").value);    
    numeros[2] = parseFloat (document.getElementById("3").value);
    numeros[3] = parseFloat (document.getElementById("4").value);    
    numeros[4] = parseFloat (document.getElementById("5").value);
    numeros[5] = parseFloat (document.getElementById("6").value);    
    numeros[6] = parseFloat (document.getElementById("7").value);
    numeros[7] = parseFloat (document.getElementById("8").value);    
    numeros[8] = parseFloat (document.getElementById("9").value);
    numeros[9] = parseFloat (document.getElementById("10").value);    
    numeros[10] = parseFloat (document.getElementById("11").value);
    numeros[11] = parseFloat (document.getElementById("12").value);    
    numeros[12] = parseFloat (document.getElementById("13").value);
    numeros[13] = parseFloat (document.getElementById("14").value);    
    numeros[14] = parseFloat (document.getElementById("15").value);
    numeros[15] = parseFloat (document.getElementById("16").value);    
    numeros[16] = parseFloat (document.getElementById("17").value);
    numeros[17] = parseFloat (document.getElementById("18").value);    
    numeros[18] = parseFloat (document.getElementById("19").value);
    numeros[19] = parseFloat (document.getElementById("20").value);    

    document.getElementById("resposta1").value = numeros[19];
    document.getElementById("resposta2").value = numeros[18];
    document.getElementById("resposta3").value = numeros[17];
    document.getElementById("resposta4").value = numeros[16];
    document.getElementById("resposta5").value = numeros[15];
    document.getElementById("resposta6").value = numeros[14];
    document.getElementById("resposta7").value = numeros[13];
    document.getElementById("resposta8").value = numeros[12];
    document.getElementById("resposta9").value = numeros[11];
    document.getElementById("resposta10").value = numeros[10];
    document.getElementById("resposta11").value = numeros[9];
    document.getElementById("resposta12").value = numeros[8];
    document.getElementById("resposta13").value = numeros[7];
    document.getElementById("resposta14").value = numeros[6];
    document.getElementById("resposta15").value = numeros[5];
    document.getElementById("resposta16").value = numeros[4];
    document.getElementById("resposta17").value = numeros[3];
    document.getElementById("resposta18").value = numeros[2];
    document.getElementById("resposta19").value = numeros[1];
    document.getElementById("resposta20").value = numeros[0];
    
}