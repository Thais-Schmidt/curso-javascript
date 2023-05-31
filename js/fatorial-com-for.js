function fatorial(){
    let num = parseInt (document.getElementById('num').value);
    let numero = 1;

    for(let i=num; i>0; i--){
        numero = numero * i;
    }
    
    document.getElementById("resultado").innerHTML = numero;

}

// O fatorial de um número é o produto dele pelos seus antecessores maiores que 0. O fatorial de um número é a multiplicação desse número por todos os seus antecessores maiores que zero.