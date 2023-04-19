// calculo da area do triangulo


function calculoAreaTriangulo(){
    let base = parseFloat(document.getElementById("baseT").value);
    let altura = parseFloat(document.getElementById("alturaT").value);
    
    let area = (base*altura)/2;

    document.getElementById("calcular").value = area;

    if(area<=100){
        alert("A area do triângulo é igual a " +area+ ". Este triângulo pertence ao grupo 1")
    }else if((area>100)&&(area<=400)){
        alert("A area do triângulo é igual a " +area+ ". Este triângulo pertence ao grupo 2")
    }else if((area>400)&&(area<=600)){
        alert("A area do triângulo é igual a " +area+ ". Este triângulo pertence ao grupo 3")
    }else if((area>600)&&(area<=1000)){
        alert("A area do triângulo é igual a " +area+ ". Este triângulo pertence ao grupo 4")
    }else{
        alert("A area do triângulo é igual a " +area+ ". Este triângulo pertence ao grupo 5")
    }

}

//calculo da area do circulo = A área de um círculo é pi vezes o raio elevado ao quadrado (A = π r²). 

function calculoCirculo(){
    var raio = parseFloat (document.getElementById("raio").value);
    var pi = Math.PI;
    var conta = pi*(raio*raio);

    document.getElementById("result").value = conta.toFixed(2)
    

}