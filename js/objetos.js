let pessoa = {
    nome:"Thais Schmidt",
    idade: 22,
    altura: 1.55,
    cargo: "Esperando um milagre"
};
document.write(`Nome:${pessoa.nome} <br>`)
document.write(`Idade:${pessoa.idade} <br><br>`)
//console.log(pessoa)

//juntando arrays com objetos

let usuarios = [
    {nome:"Thata", cargo: "Tentando a sorte", status: "Ativo"},
    {nome:"Tati", cargo: "Rica", status: "Ausente"},
    {nome:"Schmidt", cargo: "Empresaria", status: "Fugindo"},
];

// console.log(usuarios)

document.write("Nome: " +usuarios[1].nome+ "<br>");
document.write("Cargo "+usuarios[1].cargo+ "<br>");
document.write("Status "+usuarios[1].status+ "<br><br>");

document.write(`Nome: ${usuarios[1].nome}<br>`);
document.write(`Cargo:${usuarios[1].cargo}<br>`);
document.write(`Status:${usuarios[1].status}<br>`);
