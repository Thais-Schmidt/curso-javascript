alert("Bem vindo!")

function subtrair(){

var arrayA = new Array(19);
arrayA[0] = parseInt (document.getElementById("1").value);
arrayA[1] = parseInt (document.getElementById("2").value);
arrayA[2] = parseInt (document.getElementById("3").value);
arrayA[3] = parseInt (document.getElementById("4").value);
arrayA[4] = parseInt (document.getElementById("5").value);
arrayA[5] = parseInt (document.getElementById("6").value);
arrayA[6] = parseInt (document.getElementById("7").value);
arrayA[7] = parseInt (document.getElementById("8").value);
arrayA[8] = parseInt (document.getElementById("9").value);
arrayA[9] = parseInt (document.getElementById("10").value);
arrayA[10] = parseInt (document.getElementById("11").value);
arrayA[11] = parseInt (document.getElementById("12").value);
arrayA[12] = parseInt (document.getElementById("13").value);
arrayA[13] = parseInt (document.getElementById("14").value);
arrayA[14] = parseInt (document.getElementById("15").value);
arrayA[15] = parseInt (document.getElementById("16").value);
arrayA[16] = parseInt (document.getElementById("17").value);
arrayA[17] = parseInt (document.getElementById("18").value);
arrayA[18] = parseInt (document.getElementById("19").value);
arrayA[19] = parseInt (document.getElementById("20").value);

var arrayB = new Array(19);
arrayB[0] = parseInt (document.getElementById("1b").value);
arrayB[1] = parseInt (document.getElementById("2b").value);
arrayB[2] = parseInt (document.getElementById("3b").value);
arrayB[3] = parseInt (document.getElementById("4b").value);
arrayB[4] = parseInt (document.getElementById("5b").value);
arrayB[5] = parseInt (document.getElementById("6b").value);
arrayB[6] = parseInt (document.getElementById("7b").value);
arrayB[7] = parseInt (document.getElementById("8b").value);
arrayB[8] = parseInt (document.getElementById("9b").value);
arrayB[9] = parseInt (document.getElementById("10b").value);
arrayB[10] =parseInt (document.getElementById("11b").value);
arrayB[11] =parseInt (document.getElementById("12b").value);
arrayB[12] =parseInt (document.getElementById("13b").value);
arrayB[13] =parseInt (document.getElementById("14b").value);
arrayB[14] =parseInt (document.getElementById("15b").value);
arrayB[15] =parseInt (document.getElementById("16b").value);
arrayB[16] =parseInt (document.getElementById("17b").value);
arrayB[17] =parseInt (document.getElementById("18b").value);
arrayB[18] =parseInt (document.getElementById("19b").value);
arrayB[19] =parseInt (document.getElementById("20b").value);

var arrayC = new Array(19);
arrayC[0] = arrayA[0] - arrayB[0];
arrayC[1] = arrayA[1] - arrayB[1];
arrayC[2] = arrayA[2] - arrayB[2];
arrayC[3] = arrayA[3] - arrayB[3];
arrayC[4] = arrayA[4] - arrayB[4];
arrayC[5] = arrayA[5] - arrayB[5];
arrayC[6] = arrayA[6] - arrayB[6];
arrayC[7] = arrayA[7] - arrayB[7];
arrayC[8] = arrayA[8] - arrayB[8];
arrayC[9] = arrayA[9] - arrayB[9];
arrayC[10] = arrayA[10] - arrayB[10];
arrayC[11] = arrayA[11] - arrayB[11];
arrayC[12] = arrayA[12] - arrayB[12];
arrayC[13] = arrayA[13] - arrayB[13];
arrayC[14] = arrayA[14] - arrayB[14];
arrayC[15] = arrayA[15] - arrayB[15];
arrayC[16] = arrayA[16] - arrayB[16];
arrayC[17] = arrayA[17] - arrayB[17];
arrayC[18] = arrayA[18] - arrayB[18];
arrayC[19] = arrayA[19] - arrayB[19];

document.getElementById("resultado1").value = arrayC[0];
document.getElementById("resultado2").value = arrayC[1];
document.getElementById("resultado3").value = arrayC[2];
document.getElementById("resultado4").value = arrayC[3];
document.getElementById("resultado5").value = arrayC[4];
document.getElementById("resultado6").value = arrayC[5];
document.getElementById("resultado7").value = arrayC[6];
document.getElementById("resultado8").value = arrayC[7];
document.getElementById("resultado9").value = arrayC[8];
document.getElementById("resultado10").value = arrayC[9];
document.getElementById("resultado11").value = arrayC[10];
document.getElementById("resultado12").value = arrayC[11];
document.getElementById("resultado13").value = arrayC[12];
document.getElementById("resultado14").value = arrayC[13];
document.getElementById("resultado15").value = arrayC[14];
document.getElementById("resultado16").value = arrayC[15];
document.getElementById("resultado17").value = arrayC[16];
document.getElementById("resultado18").value = arrayC[17];
document.getElementById("resultado19").value = arrayC[18];
document.getElementById("resultado20").value = arrayC[19];

}