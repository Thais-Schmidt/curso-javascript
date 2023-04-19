alert("Bom dia, Mundo!!!")

// Função ao cubo
function cubo(){
    var numero = parseFloat (document.getElementById("numeroEscolhido").value);
    var elevando = Math.pow(numero,3);
    document.getElementById("numeroAoCubo").value = elevando; 
}
//Temperatura
function converter(){
    var Fahrenheit = parseFloat (document.getElementById("Fahrenheit").value);
    var subtraindo = Fahrenheit - 32;
    var multiplicando = subtraindo*(5/9);
    document.getElementById("Celsius").value= multiplicando};

//Area do Triangulo
function calculoAreaTriangulo(){
    let base = parseFloat(document.getElementById("baseT").value);
    let altura = parseFloat(document.getElementById("alturaT").value);
    let area = (base*altura)/2;
    document.getElementById("areaResposta").value = area;
}

// Desconto
function descontando(){
    var valor = parseFloat (document.getElementById("valor").value);
    var desconto = 5/100;
    var valorDescontado = valor*desconto;
    var valorTotalComDesconto = valor-valorDescontado;
    document.getElementById("valorDesconto").value = valorDescontado;
    document.getElementById("valorMenosDesconto").value = valorTotalComDesconto;
}

//Maior ou menor de idade
function maioroumenor(){
    var anoAtual = document.getElementById("anoAtual").value;
    var anoNascimento = document.getElementById("anoNascimento").value;
    var subtraindo = anoAtual-anoNascimento;
    document.getElementById("respostaMaioridade").value = subtraindo;

        if (subtraindo >=18){
        document.getElementById("respostaMaioridade").value = ("É maior de idade.");
        }

        if (subtraindo <=17){
        document.getElementById("respostaMaioridade").value = ("É menor de idade."); 
        }
}

//Carro
function valorEmMaos(){
    let dinheiro = parseFloat (document.getElementById("dinheiro").value);
    let calculo = dinheiro/5
    let quilometro = calculo*20

    document.getElementById("litros").value = calculo;
    document.getElementById("quilometros").value = quilometro;
}

//Circulo
function calculoBaseCirculo(){
    var raio = parseFloat (document.getElementById("raio").value);
    var pi = Math.PI;
    var conta = pi*(raio*raio);

    document.getElementById("result").value = conta.toFixed(2)
    
}